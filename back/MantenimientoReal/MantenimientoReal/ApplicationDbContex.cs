using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class ApplicationDbContex: DbContext
    {


        public ApplicationDbContex( DbContextOptions op ):base(op)
        {
            
        }


        public DbSet<Aseguradora> Aseguradora { get; set; }

    }
}
