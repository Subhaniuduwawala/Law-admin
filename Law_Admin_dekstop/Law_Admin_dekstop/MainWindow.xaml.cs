using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;



namespace Law_Admin_dekstop
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            // Set default page
            MainContentFrame.Navigate(new HomePage());
        }

        private void NavigateToPage(object sender, RoutedEventArgs e)
        {
            Button clickedButton = (Button)sender;
            string? pageTag = clickedButton.Tag?.ToString();

            if (pageTag == null)
            {
                // Handle the case where the tag is null
                return;
            }

            switch (pageTag)
            {
                case "HomePage":
                    MainContentFrame.Navigate(new HomePage());
                    break;
                case "AboutUsPage":
                    MainContentFrame.Navigate(new AboutUsPage());
                    break;
                case "ServicesPage":
                    MainContentFrame.Navigate(new ServicesPage());
                    break;
                case "AttorneysPage":
                    MainContentFrame.Navigate(new AttorneysPage());
                    break;
                case "ContactUsPage":
                    MainContentFrame.Navigate(new ContactUsPage());
                    break;
            }
        }
        private void CloseWindow(object sender, RoutedEventArgs e)
        {
            // Close the application
            Application.Current.Shutdown();
        }

        private void MinimizeWindow(object sender, RoutedEventArgs e)
        {
            // Minimize the application
            this.WindowState = WindowState.Minimized;
        }

        private void ResizeWindow(object sender, RoutedEventArgs e)
        {
            // Toggle between Normal and Maximized states
            if (this.WindowState == WindowState.Normal)
                this.WindowState = WindowState.Maximized;
            else
                this.WindowState = WindowState.Normal;
        }
        private void TopBar_MouseDown(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            if (e.LeftButton == System.Windows.Input.MouseButtonState.Pressed)
                this.DragMove();
        }

        private void MainContentFrame_Navigated(object sender, NavigationEventArgs e)
        {

        }
        private void LogoutButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to Login Window
            UserLogin loginWindow = new UserLogin();
            loginWindow.Show();

            // Close current window
            this.Close();
        }
    }
}
