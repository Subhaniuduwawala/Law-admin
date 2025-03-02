using Microsoft.EntityFrameworkCore;

namespace Law_Admin_dekstop
{
    public class UserDataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Specify the SQLite database file
            optionsBuilder.UseSqlite("Data Source=C:\\Users\\Asus\\Documents\\Project\\github\\Law_Admin_dekstop\\Law_Admin_dekstop\\bin\\Debug\\net9.0-windows\\DataFile.db");
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Appointments> Appointments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User { Id = 1, Name = "AdminUser", Password = "admin123", UserType = "Admin" },
                new User { Id = 2, Name = "CustomerUser", Password = "customer123", UserType = "Customer" }
            );

            modelBuilder.Entity<Appointments>(entity =>
            {
                entity.HasKey(a => a.Id);
                entity.Property(a => a.Name).IsRequired();
                entity.Property(a => a.Email).IsRequired();
                entity.Property(a => a.AppointmentDate).IsRequired();
                entity.Property(a => a.TimeSlot).IsRequired();
                entity.Property(a => a.LawType).IsRequired();
                entity.Property(a => a.Lawyer).IsRequired();
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
