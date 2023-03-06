import React, { useState } from 'react'
import "./App.css"

export const ModalAdd = ({setaddModal, setaseguradoras}) => {


    const [values, setvalues] = useState({ id:0,nombre:"", comision:0.00, estado:false })

    function handleChange(e){


        setvalues(estado => {

                return {
                    ...estado,
                    [e.target.name]: e.target.type === "checkbox" ?  e.target.checked :  e.target.value
                }
        })

    }

    
    // function callAppi(){

      
    //     let op =  {
    //       method:'GET',
    //       headers:{
    //         // 'Accept': 'application/json',
    //         // 'Content-Type':"application/json",
    //         'Authorization':"Bearer 1234"
    //       }
    //     }
  
    //       fetch("https://localhost:7002/api/mantenimiento",op)
    //        .then(res => res.json())
    //          .then(data => {
    //           // setisloanding(false)
    //           setaseguradoras(data)
    //          });
    //   }

    function comicion(comision){

         return comision.toFixed(2) + "%"
    }

    function decimal(percentage){

        return parseFloat(percentage) / 100;
    }

    function onAdd(){


        if(values.id == "" || values.nombre == "" || values.comision == ""){

            alert("Please enter some values")

            return
        }

        if(values.nombre.length > 45){
            alert("el nombre es muy largo")
            return
        }

        let c = comicion(parseFloat(values.comision));
        c = parseInt(c.slice(c.length))
        if(c > 25){
            alert("La comision debe ser menor de 25% o igual")
            return
        }
        let d = decimal(c);

        let payload = {
            Id: parseInt(values.id),
            Nombre: values.nombre,
            Comision:parseFloat(values.comision),
            Estado: values.estado
        }
        setaddModal(false)

        fetch("https://localhost:7002/api/mantenimiento",     {
            method:'POST',        
            headers:{
                'Accept': 'application/json',
            'Content-Type':"application/json",         
            'Authorization':"Bearer 1234"  
                     },
            body:JSON.stringify(payload)
        }).then(res => res.json(values))
            .then(data =>  {
                if(data){
                    alert(data.title + " intenta de nuevo")
                }
            } );
  

 
      }


  return (
    <div className='border w-75 modalContainerParent '   >
        <div >     
            <div className='modalContainer' >
                <label>ID   (Please select one id that is diferent of the above one*)</label>
                <input name='id' value={values.id} onChange={handleChange} />
                <label>Nombre</label>
                <input name='nombre' value={values.nombre}  onChange={handleChange} />
                <label>Comision (the Comision should be less then 25%)</label>
                <input name='comision' value={values.comision}  onChange={handleChange}/>
                <label>Estado</label>
                <input  name='estado' type="checkbox"  value={values.estado} onChange={handleChange} />      
            </div>
            <div>
                <button type="button" className="btn btn-secondary" onClick={() => setaddModal(false)} >Close</button>
                <button type="button" className="btn btn-primary ms-2" onClick={onAdd}>Add</button>
            </div>
        </div>
  </div>
  )
}
