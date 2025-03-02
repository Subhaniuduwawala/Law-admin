using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using static Law_Admin_dekstop.Appointment;

namespace Law_Admin_dekstop
{
    public partial class HomePage : Page
    {
        private AppointmentService _appointmentService;
        private string _currentCustomerName;

        // Constructor with customer name for user-specific view
        public HomePage(string customerName = "")
        {
            InitializeComponent();
            _appointmentService = new AppointmentService();
            _currentCustomerName = customerName;

            // Load data based on customer name
            if (string.IsNullOrEmpty(_currentCustomerName))
            {
                // If no customer name is provided, load all appointments (Admin View)
                LoadAppointments();
            }
            else
            {
                // If customer name is provided, load only customer-specific appointments
                LoadCustomerAppointments();
            }
        }

        // Load appointments for the current customer
        private void LoadCustomerAppointments()
        {
            var customerAppointments = _appointmentService.GetAppointmentsByCustomer(_currentCustomerName);

            // Bind data to DataGrid
            CustomerAppointmentDataGrid.ItemsSource = null;
            CustomerAppointmentDataGrid.ItemsSource = customerAppointments;
        }

        // Load all appointments (For Admin View)
        private void LoadAppointments()
        {
            var appointments = _appointmentService.GetAllAppointments();

            // Bind data to DataGrid
            CustomerAppointmentDataGrid.ItemsSource = null;
            CustomerAppointmentDataGrid.ItemsSource = appointments;
        }

        // Refresh the DataGrid
        private void RefreshCustomerAppointments_Click(object sender, RoutedEventArgs e)
        {
            // Refresh data based on customer name
            if (!string.IsNullOrEmpty(_currentCustomerName))
            {
                LoadCustomerAppointments();
            }
            else
            {
                LoadAppointments();
            }
        }

        // Edit the selected appointment
        private void EditAppointmentButton_Click(object sender, RoutedEventArgs e)
        {
            var selectedAppointment = (Appointments)CustomerAppointmentDataGrid.SelectedItem;

            if (selectedAppointment != null)
            {
                // Open the EditAppointment window and pass the selected appointment
                EditAppointment editWindow = new EditAppointment(selectedAppointment);
                editWindow.ShowDialog();

                // Refresh appointments after editing
                RefreshCustomerAppointments_Click(sender, e);
            }
            else
            {
                MessageBox.Show("Please select an appointment to edit.",
                                "Warning", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }

        // Navigate to Contact Us Page
        private void ContactUsButton_Click(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new ContactUsPage());
        }

        // Navigate to Appointment Page
        private void NavigateToAppointmentPage_Click(object sender, RoutedEventArgs e)
        {
            this.NavigationService.Navigate(new Appointment());
        }

        
    }
}
