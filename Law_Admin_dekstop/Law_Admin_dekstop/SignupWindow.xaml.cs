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


namespace Law_Admin_dekstop
{
    public partial class SignupWindow : Window
    {
        public SignupWindow()
        {
            InitializeComponent();
        }

        private void SignupButton_Click(object sender, RoutedEventArgs e)
        {
            string username = UsernameBox.Text;
            string password = PasswordBox.Password;
            

            // Validate input
            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password) )
            {
                MessageBox.Show("All fields are required.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            using (var context = new UserDataContext())
            {
                // Check if the username already exists
                var existingUser = context.Users.FirstOrDefault(u => u.Name == username);
                if (existingUser != null)
                {
                    MessageBox.Show("Username already exists. Please choose a different username.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                    return;
                }

                // Add the new user
                var newUser = new User
                {
                    Name = username,
                    Password = password,
                    UserType = "Customer"
                };
                context.Users.Add(newUser);
                context.SaveChanges();

                MessageBox.Show("Signup successful! You can now log in.", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                // Navigate back to the login page
                UserLogin loginWindow = new UserLogin();
                loginWindow.Show();
                this.Close();
            }
        }

        private void BackToLoginButton_Click(object sender, RoutedEventArgs e)
        {
            // Navigate back to the login window
            UserLogin loginWindow = new UserLogin();
            loginWindow.Show();
            this.Close();
        }

        private void ExitButton_Click(object sender, RoutedEventArgs e)
        {
            Application.Current.Shutdown();
        }
    }
}
