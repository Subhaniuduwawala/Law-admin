using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;

namespace Law_Admin_dekstop
{
    public class AppointmentService
    {
        // Create a new appointment
        public void CreateAppointment(Appointments appointment)
        {
            try
            {
                using (var context = new UserDataContext())
                {
                    context.Appointments.Add(appointment);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error creating appointment: {ex.Message}",
                                "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        // Read all appointments
        public List<Appointments> GetAllAppointments()
        {
            try
            {
                using (var context = new UserDataContext())
                {
                    // Fetch all appointments from the database
                    var appointments = context.Appointments.ToList();

                    // Return the list of appointments
                    return appointments;
                }
            }
            catch (Exception ex)
            {
                // Log and return an empty list if an error occurs
                MessageBox.Show($"Error fetching appointments: {ex.Message}",
                                "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return new List<Appointments>();
            }
        }

        // Read appointments for a specific customer
        public List<Appointments> GetAppointmentsByCustomer(string customerName)
        {
            try
            {
                using (var context = new UserDataContext())
                {
                    // Fetch appointments for the specific customer
                    var appointments = context.Appointments
                                              .Where(a => a.Name == customerName)
                                              .ToList();

                    return appointments;
                }
            }
            catch (Exception ex)
            {
                // Log and return an empty list if an error occurs
                MessageBox.Show($"Error fetching customer appointments: {ex.Message}",
                                "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return new List<Appointments>();
            }
        }

        // Update an existing appointment
        public void UpdateAppointment(Appointments updatedAppointment)
        {
            try
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
            catch (Exception ex)
            {
                MessageBox.Show($"Error updating appointment: {ex.Message}",
                                "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        // Delete an appointment
        public void DeleteAppointment(int appointmentId)
        {
            try
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
            catch (Exception ex)
            {
                MessageBox.Show($"Error deleting appointment: {ex.Message}",
                                "Database Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}
