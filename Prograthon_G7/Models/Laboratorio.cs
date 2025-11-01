using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prograthon_G7.Models
{

    [Table("Laboratorio")]
    public class Laboratorio
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LaboratorioId { get; set; }

        [Required]
        [StringLength(100)]
        public string Nombre { get; set; }

        [Required]
        public int Capacidad { get; set; }

        [StringLength(100)]
        public string Responsable { get; set; }

        [StringLength(100)]
        public string Ubicacion { get; set; }

        // Propiedad de navegación
        public ICollection<Reserva> Reservas { get; set; } = new List<Reserva>();
    }
}