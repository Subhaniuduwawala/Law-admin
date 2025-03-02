using System.Windows;
using static Law_Admin_dekstop.Appointment;

namespace Law_Admin_dekstop
{
    public partial class AdminPage : Window
    {
        private AppointmentService _appointmentService;

        public AdminPage()
        {
            InitializeComponent();
            _appointmentService = new AppointmentService();

            // Load all appointments when the page initializes
            LoadAppointments();
        }

        // Load all appointments into the DataGrid
        private void LoadAppointments()
        {
            // Fetch all appointments using AppointmentService
            var appointments = _appointmentService.GetAllAppointments();

            // Bind data to DataGrid
            AppointmentDataGrid.ItemsSource = null; // Clear existing bindings
            AppointmentDataGrid.ItemsSource = appointments;
        }

        // Refresh Appointments on button click
        private void RefreshAppointments_Click(object sender, RoutedEventArgs e)
        {
            LoadAppointments();
        }

        // Edit the selected appointment
        private void EditAppointment_Click(object sender, RoutedEventArgs e)
        {
            var selectedAppointment = (Appointments)AppointmentDataGrid.SelectedItem;

            if (selectedAppointment != null)
            {
                // Open the EditAppointment window and pass the selected appointment
                EditAppointment editWindow = new EditAppointment(selectedAppointment);
                editWindow.ShowDialog();

                // Refresh appointments after editing
                LoadAppointments();
            }
            else
            {
                MessageBox.Show("Please select an appointment to edit.",
                                "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }

        // Delete the selected appointment
        private void DeleteAppointment_Click(object sender, RoutedEventArgs e)
        {
            var selectedAppointment = (Appointments)AppointmentDataGrid.SelectedItem;

            if (selectedAppointment != null)
            {
                // Confirmation before deleting
                var result = MessageBox.Show($"Are you sure you want to delete the appointment for {selectedAppointment.Name}?",
                                             "Confirmation", MessageBoxButton.YesNo, MessageBoxImage.Question);

                if (result == MessageBoxResult.Yes)
                {
                    _appointmentService.DeleteAppointment(selectedAppointment.Id);
                    MessageBox.Show("Appointment deleted successfully.",
                                    "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                    // Refresh appointments after deletion
                    LoadAppointments();
                }
            }
            else
            {
                MessageBox.Show("Please select an appointment to delete.",
                                "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }
    }
}
