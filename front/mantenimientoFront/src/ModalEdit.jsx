

import React, { useState } from 'react'
import "./App.css"

export const ModalEdit = ({id, seteditModal}) => {



    const [values, setvalues] = useState({ id:id,nombre:"", comision:0.0, estado:false })

    
    function handleChange(e){


        setvalues(estado => {

        return {
            ...estado,
            [e.target.name]: e.target.type === "checkbox" ?  e.target.checked :  e.target.value
        }
        })

    }

  

    function editarAseguradora(){

        if( values.nombre == "" || values.comision == ""){

            alert("Please enter some values")

            return
        }

        let payload = {
            Id: parseInt(values.id),
            Nombre: values.nombre,
            Comision:parseFloat(values.comision),
            Estado: values.estado
        }

        seteditModal(false)


        fetch(`https://localhost:7002/api/mantenimiento/${id}`, {
            method:'PUT',        
            headers:{
                'Accept': 'application/json',
                'Content-Type':"application/json",         
                'Authorization':"Bearer 1234"
            },
            body: JSON.stringify(payload)
          
        }).then(res => res.json())
        .then(d => console.log(d))

    }

  return (
    <div className='border w-75 modalContainerParent ' style={{width:"400px", position:"absolute" }} >

            <div  >

                
                <div className='modalContainer'>
                    <label>ID</label>
                    <input name='id' disabled={true} value={values.id} onChange={handleChange} />
                    <label>Nombre</label>
                    <input name='nombre' value={values.nombre} onChange={handleChange} />
                    <label>Comision</label>
                    <input name='comision' value={values.comision}  onChange={handleChange}/>
                    <label>Estado</label>
                    <input  name='estado' type="checkbox"  value={values.estado} onChange={handleChange} />      
                </div>
                <div>
                <button type="button" className="btn btn-secondary" onClick={() => seteditModal(false)} >Close</button>
                <button onClick={ editarAseguradora } type="button" className="btn btn-primary">Editar</button>
                </div>
            </div>
  </div>
  )
}
