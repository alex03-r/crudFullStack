
import React, { useState } from 'react'

export const ModalDelete = ({id, setOpenModal }) => {



    function eliminarAseguradora(){

      setOpenModal(false)

        fetch(`https://localhost:7002/api/mantenimiento/${id}`, {
            method:'DELETE',
            headers:{
              'Accept': 'application/json',
                "Contend-Type":'application/json',
                'Authorization':"Bearer 1234"
            },
          
        }).then(res => res.json())
        .then(d => console.log(d))

    }

  return (
    <div className='border mb-5' style={{width:"400px", position:"relative"}}>

        <div className='mb-4 p-1'>

           <label>Estas seguro que quieres eliminar esta aseguradora {id}?</label>
        </div>
          <div className='p-2'>
          <button type="button" className="btn btn-secondary " onClick={() => setOpenModal(false)}>Close</button>
          <button onClick={ eliminarAseguradora } type="button" className="btn btn-primary ms-3">Delete</button>
        </div>
  </div>
  )
}
