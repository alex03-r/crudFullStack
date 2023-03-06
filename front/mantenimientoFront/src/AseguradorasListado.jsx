import React, { useState, useEffect } from 'react'
import { ModalDelete } from './ModalDelete';
import { ModalEdit } from './ModalEdit';
import { ModalAdd } from './ModalAdd';

export const AseguradorasListado = () => {


    const [aseguradoras, setaseguradoras] = useState([])

    const [openModal,setOpenModal] = useState(false)
    const [editModal,seteditModal] = useState(false)
    const [addModal,setaddModal] = useState(false)
    const [id, setId] = useState(0)
    const [isLoandind , setisloanding] = useState(true)


    // function callAppi(){

      
    //   let op =  {
    //     method:'GET',
    //     headers:{
    //       // 'Accept': 'application/json',
    //       // 'Content-Type':"application/json",
    //       'Authorization':"Bearer 1234"
    //     }
    //   }

    //     fetch("https://localhost:7002/api/mantenimiento",op)
    //      .then(res => res.json())
    //        .then(data => {
    //         // setisloanding(false)
    //         setaseguradoras(data)
    //        });
    // }

    useEffect(() => {

      let op =  {
        method:'GET',
        headers:{
          // 'Accept': 'application/json',
          // 'Content-Type':"application/json",
          'Authorization':"Bearer 1234"
        }
      }

        fetch("https://localhost:7002/api/mantenimiento",op)
         .then(res => res.json())
           .then(data => {
            setisloanding(false)
            setaseguradoras(data)
           });

         console.log("one time")
    }, [ openModal, editModal, openModal ])

 

   function onDelete(id){

    setOpenModal(true)
    setId(id)

   }

   function onEdit(id){

    seteditModal(true)
    setId(id)
   }


  return (
    <div className="" style={{position:"relative"}} >
    <div className='mb-4'>     

      <button className='btn btn-primary mt-3' onClick={() => setaddModal(true)} >+</button>
    </div>

        <div style={{width:"400px"}}>
        <table class="table">
          <thead>
            <tr>
              <label >id</label>
              <label >Nombre</label>
              <label>Comision</label>
              <label >Estado</label>
              <label >Acciones</label>
            </tr>
          </thead>
          <tbody >
            <tr>
                {

          isLoandind ?   <label>Loading...</label>

                  :
                  aseguradoras.map(aseguradora => (
                    <div key={aseguradora.id} className="d-flex" >             
                            <th scope="row">{aseguradora.id}</th>
                            <td className='ms-2'>{aseguradora.nombre}</td>
                            <td >{aseguradora.comision}</td>
                            <td>
                            <input type="checkbox" checked={aseguradora.estado} />
                            </td>
                            <div className='ms-5'>
                                <button className='btn btn-danger' onClick={ () =>  onDelete(aseguradora.id) } >Eliminar</button>
                                <button className='btn btn-info ms-3' onClick={() => onEdit(aseguradora.id)} >Editar</button>
                            </div>
                    </div>
                  ))
              
                
                }
          
            </tr>        
          </tbody>
      </table>
        </div>
           { addModal && <ModalAdd setaseguradoras={setaseguradoras}  setaddModal={setaddModal} />  }
           {  openModal && <ModalDelete id={id} setOpenModal={setOpenModal}  /> }   

          {editModal   &&   <ModalEdit  id={id}  seteditModal={ seteditModal }/> }      
    </div>
  )


}
