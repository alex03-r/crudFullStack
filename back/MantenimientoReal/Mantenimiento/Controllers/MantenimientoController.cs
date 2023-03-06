using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mantenimiento.Controllers
{
    [Route("api/mantenimiento")]
    [ApiController]
    [EnableCors("MyCorsPolicy")]
    public class MantenimientoController : ControllerBase

    {
        public readonly Datos.ApplicationDbContex contex;

        public MantenimientoController(Datos.ApplicationDbContex contex)
        {
            this.contex = contex;
        }

        [HttpGet]
        public ActionResult<List<Datos.Aseguradora>> Get()
        {

            var metodos = new Negocio.AseguradoraMetodos();

            var TodasAseguradoras = metodos.MostrarAseguradoras(contex);

            return Ok(TodasAseguradoras);
          
        }

        [HttpPost]
        public ActionResult Post( [FromBody] Datos.Aseguradora aseguradora)
        {

            var metodos = new Negocio.AseguradoraMetodos();

            var estaGuardado = metodos.AgreagarAseguradora(aseguradora, contex);

            if (!estaGuardado)
            {
                return BadRequest();
            }

            return Ok();

        }

        [HttpPut("{id:int}")]
        public ActionResult Edit( int id, [FromBody] Datos.Aseguradora aseguradora)
        {

            var metodos = new Negocio.AseguradoraMetodos();

            var estaEditado = metodos.EditarAseguradora(id, aseguradora, contex);

            if (!estaEditado)
            {
                return BadRequest();
            }

            return Ok();

        }
        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {

            var metodos = new Negocio.AseguradoraMetodos();

            var estaEliminado = metodos.EliminarAseguradora(id, contex);

            if (!estaEliminado)
            {
                return BadRequest();
            }

            return Ok();

        }










    }
}
