using System.ComponentModel.DataAnnotations;

namespace Law_Admin_dekstop
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Password { get; set; }
        public required string UserType { get; set; }

    }
}