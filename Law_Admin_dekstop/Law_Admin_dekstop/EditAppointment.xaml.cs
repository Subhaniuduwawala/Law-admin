using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;


using static Law_Admin_dekstop.Appointment;

namespace Law_Admin_dekstop
{
    public partial class EditAppointment : Window
    {
        private Appointments _appointment;
        private AppointmentService _appointmentService;

        public EditAppointment(Appointments appointment)
        {
            InitializeComponent();
            _appointment = appointment;
            _appointmentService = new AppointmentService();

            // Load the appointment details into the form fields
            LoadAppointmentDetails();
        }

        private void LoadAppointmentDetails()
        {
            // Populate the form fields with the current appointment details
            NameTextBox.Text = _appointment.Name;
            EmailTextBox.Text = _appointment.Email;

            // Parse and set the appointment date if it exists
            if (DateTime.TryParse(_appointment.AppointmentDate, out DateTime parsedDate))
            {
                AppointmentDatePicker.SelectedDate = parsedDate;
            }

            TimeSlotTextBox.Text = _appointment.TimeSlot;
            LawTypeTextBox.Text = _appointment.LawType;
            LawyerTextBox.Text = _appointment.Lawyer;
        }

        private void SaveButton_Click(object sender, RoutedEventArgs e)
        {
            // Validate input fields
            if (string.IsNullOrWhiteSpace(NameTextBox.Text) ||
                string.IsNullOrWhiteSpace(EmailTextBox.Text) ||
                AppointmentDatePicker.SelectedDate == null ||
                string.IsNullOrWhiteSpace(TimeSlotTextBox.Text) ||
                string.IsNullOrWhiteSpace(LawTypeTextBox.Text) ||
                string.IsNullOrWhiteSpace(LawyerTextBox.Text))
            {
                MessageBox.Show("Please fill in all the fields.",
                                "Validation Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Update the appointment object with the new values from the form fields
            _appointment.Name = NameTextBox.Text;
            _appointment.Email = EmailTextBox.Text;
            _appointment.AppointmentDate = AppointmentDatePicker.SelectedDate?.ToString("yyyy-MM-dd") ?? _appointment.AppointmentDate;
            _appointment.TimeSlot = TimeSlotTextBox.Text;
            _appointment.LawType = LawTypeTextBox.Text;
            _appointment.Lawyer = LawyerTextBox.Text;

            // Save the changes to the database
            _appointmentService.UpdateAppointment(_appointment);

            // Show a success message
            MessageBox.Show("Appointment updated successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

            // Close the window
            this.Close();
        }
    }
}

