using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prograthon_G7.Models
{

    [Table("Usuario")]
    public class Usuario
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UsuarioId { get; set; }

        [Required]
        [StringLength(100)]
        public string Nombre { get; set; }

        [Required]
        [StringLength(50)] // Ajustado el largo para un ENUM o tipo de usuario
        public string Tipo { get; set; } // Ejemplo: "Estudiante", "Profesor", "Administrador"

        [Required]
        [StringLength(100)]
        [EmailAddress]
        public string Correo { get; set; }

        [StringLength(100)]
        public string Departamento { get; set; }

        // Propiedad de navegación
        public ICollection<Reserva> Reservas { get; set; } = new List<Reserva>();
    }
}