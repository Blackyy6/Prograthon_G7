using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prograthon_G7.Models
{
    
    [Table("Reserva")]
    public class Reserva
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ReservaId { get; set; }

        // Llave Foránea a Usuario
        [Required]
        public int UsuarioId { get; set; }

        // Llave Foránea a Laboratorio
        [Required]
        public int LaboratorioId { get; set; }

        [Required]
        [DataType(DataType.Date)]
        // Usamos DateTime para mapear el tipo DATE de SQL de forma estándar
        public DateTime Fecha { get; set; }

        [Required]
        [DataType(DataType.Time)]
        // Usamos TimeSpan para mapear el tipo TIME de SQL
        public TimeSpan HoraInicio { get; set; }

        [Required]
        [DataType(DataType.Time)]
        public TimeSpan HoraFin { get; set; }

        // Propiedades de navegación para las relaciones
        [ForeignKey("UsuarioId")]
        public Usuario? Usuario { get; set; }


        [ForeignKey("LaboratorioId")]
        public Laboratorio? Laboratorio { get; set; }

    }
}