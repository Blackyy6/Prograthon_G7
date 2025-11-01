using Prograthon_G7.Models;
using Microsoft.EntityFrameworkCore;

namespace Prograthon_G7.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Laboratorio> Laboratorios { get; set; }

        public DbSet<Reserva> Reservas { get; set; }

        public DbSet<Usuario> Usuarios { get; set; }
    }
}

