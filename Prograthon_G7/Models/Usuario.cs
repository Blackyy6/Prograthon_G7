namespace ProyectoFront.Models
{
    public class Usuario
    {
        public int UsuarioId { get; set; }

        public string Nombre { get; set; }

        public string Tipo { get; set; } // Estudiante o Profesor

        public string Correo { get; set; }

        public string Departamento { get; set; }

    }
}