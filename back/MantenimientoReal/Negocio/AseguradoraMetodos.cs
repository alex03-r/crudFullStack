using Datos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class AseguradoraMetodos
    {

//public readonly Datos.ApplicationDbContex contex;

     //   public AseguradoraMetodos(Datos.ApplicationDbContex contex)
     //   {
     //       this.contex = contex;
      //  }


        public List<Datos.Aseguradora> MostrarAseguradoras(Datos.ApplicationDbContex contex)
        {

            return  contex.Aseguradora.ToList();

        }


        public bool AgreagarAseguradora(Datos.Aseguradora aseguradora, Datos.ApplicationDbContex contex)
        {

            if(aseguradora.Comision > 0.25)
            {
                return false;
                
            }

            if(aseguradora.Nombre.Length > 45)
            {
                return false;
            }


            contex.Add(aseguradora);
            contex.SaveChanges();

            return true;
        }


        public bool EditarAseguradora(int id, Datos.Aseguradora aseguradora, Datos.ApplicationDbContex contex)
        {
            if (aseguradora.Id != id)
            {
                return false;
            //    return "El id no coincide con el autor";
            }

            if (aseguradora.Comision > 0.25)
            {
                return false;

            }

            if (aseguradora.Nombre.Length > 45)
            {
                return false;
            } 

            contex.Update(aseguradora);
            contex.SaveChanges();

            return true;

        }

        public bool EliminarAseguradora(int id,Datos.ApplicationDbContex contex)
        {

            var autorParaEliminar =  contex.Aseguradora.Any(autorDB => autorDB.Id == id);
            if (!autorParaEliminar)
            {
                return false;
            }


            contex.Remove(new Datos.Aseguradora() { Id = id });
            contex.SaveChanges();


            return true;
        }



    }
}
