using System;
using System.Windows;
using System.Windows.Controls;

namespace Law_Admin_dekstop
{
    public partial class Appointment : Page
    {
        public Appointment()
        {
            InitializeComponent();
        }

        private void GetAppointmentButton_Click(object sender, RoutedEventArgs e)
        {
            string name = NameTextBox.Text;
            string email = EmailTextBox.Text;
            var selectedDate = DatePicker.SelectedDate;
            string? time = (TimePicker.SelectedItem as ComboBoxItem)?.Content.ToString();
            string? lawType = (LawTypeComboBox.SelectedItem as ComboBoxItem)?.Content.ToString();
            string? lawyer = (LawyerComboBox.SelectedItem as ComboBoxItem)?.Content.ToString();

            // Validate input fields
            if (string.IsNullOrWhiteSpace(name) || string.IsNullOrWhiteSpace(email) || !selectedDate.HasValue ||
                string.IsNullOrWhiteSpace(time) || string.IsNullOrWhiteSpace(lawType) || string.IsNullOrWhiteSpace(lawyer))
            {
                MessageBox.Show("Please fill in all the fields.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            try
            {
                // Save the appointment to the database
                using (var context = new UserDataContext())
                {
                    var newAppointment = new Appointments
                    {
                        Name = name,
                        Email = email,
                        AppointmentDate = selectedDate.Value.ToString("yyyy-MM-dd"), // Convert DateTime to string
                        TimeSlot = time,
                        LawType = lawType,
                        Lawyer = lawyer
                    };

                    context.Appointments.Add(newAppointment); // Add the appointment to the context
                    context.SaveChanges(); // Save changes to the database
                }

                // Show success message
                MessageBox.Show($"Appointment successfully created for {name} on {selectedDate.Value.ToShortDateString()} at {time} with {lawyer}.",
                    "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                // Navigate to the Home Page
                this.NavigationService.Navigate(new HomePage());
            }
            catch (Exception ex)
            {
                // Handle any database or other errors
                MessageBox.Show($"An error occurred while saving the appointment: {ex.Message}",
                    "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
            
        public class AppointmentService
        {
            // Create a new appointment
            public void CreateAppointment(Appointments appointment)
            {
                using (var context = new UserDataContext())
                {
                    context.Appointments.Add(appointment);
                    context.SaveChanges();
                }
            }

            // Read all appointments
            public List<Appointments> GetAllAppointments()
            {
                using (var context = new UserDataContext())
                {
                    return context.Appointments.ToList();
                }
            }

            // Read appointments for a specific customer
            public List<Appointments> GetAppointmentsByCustomer(string customerName)
            {
                using (var context = new UserDataContext())
                {
                    return context.Appointments.Where(a => a.Name == customerName).ToList();
                }
            }

            // Update an existing appointment
            public void UpdateAppointment(Appointments updatedAppointment)
            {
                using (var context = new UserDataContext())
                {
                    var appointment = context.Appointments.FirstOrDefault(a => a.Id == updatedAppointment.Id);
                    if (appointment != null)
                    {
                        appointment.Name = updatedAppointment.Name;
                        appointment.Email = updatedAppointment.Email;
                        appointment.AppointmentDate = updatedAppointment.AppointmentDate;
                        appointment.TimeSlot = updatedAppointment.TimeSlot;
                        appointment.LawType = updatedAppointment.LawType;
                        appointment.Lawyer = updatedAppointment.Lawyer;

                        context.SaveChanges();
                    }
                }
            }

            // Delete an appointment
            public void DeleteAppointment(int appointmentId)
            {
                using (var context = new UserDataContext())
                {
                    var appointment = context.Appointments.FirstOrDefault(a => a.Id == appointmentId);
                    if (appointment != null)
                    {
                        context.Appointments.Remove(appointment);
                        context.SaveChanges();
                    }
                }
            }
        }

        private void BackButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate back to the Home Page
            this.NavigationService.Navigate(new HomePage());
        }
    }
}
