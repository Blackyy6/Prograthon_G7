namespace Prograthon_G7.Models
{
    public class Reserva
    {
        public int ReservaId { get; set; }

        public int UsuarioId { get; set; }

        public int LaboratorioId { get; set; }

        public DateTime Fecha { get; set; }

        public TimeSpan HoraInicio { get; set; }

        public TimeSpan HoraFin { get; set; }


    }
}