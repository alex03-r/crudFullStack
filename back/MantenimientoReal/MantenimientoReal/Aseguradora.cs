using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos
{
    public class Aseguradora
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [MaxLength(45)]
        public string Nombre { get; set; }
        [Required]
        public double Comision { get; set; }
        [Required]
        public bool  Estado { get; set; }
    }
}
