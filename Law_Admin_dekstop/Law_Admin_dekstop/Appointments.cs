using System;
using System.ComponentModel.DataAnnotations;

namespace Law_Admin_dekstop
{
    public class Appointments
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string AppointmentDate { get; set; } = string.Empty; // Changed to string

        [Required]
        public string TimeSlot { get; set; } = string.Empty;

        [Required]
        public string LawType { get; set; } = string.Empty;

        [Required]
        public string Lawyer { get; set; } = string.Empty;
    }
}
