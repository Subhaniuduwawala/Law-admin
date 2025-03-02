using System;
using System.Linq;
using System.Windows;

namespace Law_Admin_dekstop
{
    public partial class UserLogin : Window
    {
        public UserLogin()
        {
            InitializeComponent();
        }

        private void SubmitButton_Click(object sender, RoutedEventArgs e)
        {
            // Get user input
            string username = UsernameBox.Text;
            string password = PasswordBox.Password;

            // Validate input
            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password))
            {
                MessageBox.Show("Username and password cannot be empty.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            using (var context = new UserDataContext())
            {
                // Check if user exists with the provided username, password, and UserType
                var user = context.Users
                                  .FirstOrDefault(u => u.Name == username && u.Password == password );

                if (user != null)
                {
                    MessageBox.Show($"Welcome, {user.UserType}!", "Login Successful", MessageBoxButton.OK, MessageBoxImage.Information);

                    // Navigate based on UserType
                    if (user.UserType == "Admin")
                    {
                        AdminPage adminWindow = new AdminPage();
                        adminWindow.Show();
                    }
                    else if (user.UserType == "Customer")
                    {
                        MainWindow customerWindow = new MainWindow();
                        customerWindow.Show();
                    }

                    this.Close(); 
                }
                else
                {
                    MessageBox.Show("Invalid username or password.", "Login Failed", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }
        private void SignupButton_Click(object sender, RoutedEventArgs e)
        {
            
            SignupWindow signupWindow = new SignupWindow();
            signupWindow.Show();

            
            this.Close();
        }


        private void ExitButton_Click(object sender, RoutedEventArgs e)
        {
            Application.Current.Shutdown();
        }
    }
}
