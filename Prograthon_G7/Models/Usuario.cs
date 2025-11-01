namespace ProyectoFront.Models
{
    public class ProductoModel
    {
        public int Id { get; set; }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        public decimal Precio { get; set; }

        public int Cantidad { get; set; }

        //      CREATE TABLE `u484426513_pac325`.`Producto` (
        //`Id` INT NOT NULL AUTO_INCREMENT,
        //`Nombre` VARCHAR(45) NOT NULL,
        //`Descripcion` VARCHAR(45) NOT NULL,
        //`Precio` DECIMAL NOT NULL,
        //`Cantidad` INT NOT NULL,
        //PRIMARY KEY(`Id`));



    }
}
