import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useNavigate} from 'react-router-dom';

const EditarProductores = ({productor}) => {
   
  // Hook para redireccionar
   const navigate = useNavigate();
 // validación y leer los datos del formulario
 const formik = useFormik({
  initialValues: {
    id: productor.id,
    id_productor: productor.id_productor,  
    fincaid: productor.fincaid,
    nombres: productor.nombres,
    apellidos: productor.apellidos,
    numero_cedula: productor.numero_cedula,
    numero_telefono: productor.numero_telefono,  
    comunidad: productor.comunidad,
    municipio: productor.municipio,
      
  }, 
  validationSchema: Yup.object({
    id_productor: Yup.string()
                  .required('El id del productor es obligatorio'),
    fincaid: Yup.string()
                  .required('El id de la finca es obligatorio'),
    nombres: Yup.string()
                  .required('El nombre  es necesario'),
    apellidos: Yup.string()
                  .required('El apellido es necesario'),
    numero_cedula: Yup.string()
                  .required('El numero de cedula es obligatorio'),
    numero_telefono: Yup.string()
                  .required('El numero de celular es necesario'),
    comunidad: Yup.string()
                  .required('la comunidad es un campo necesario'),
    municipio: Yup.string()
                  .required('La comunidad es obligatorio'), 
                  
  }),
  onSubmit: productor => {
      try {   
          let config={
            method:'put',
            url:`https://murmuring-wave-68820.herokuapp.com/api/productores/${productor.id}`,
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            data:productor
          };
          console.log(config);

          axios(config)
                  .then(response => console.log(response.data))
                  .catch(error =>{
                    if(error.response){
                      console.log(error.response)
                    }
                  });

          // Redireccionar
          navigate('/mostrarproductores');
      } catch (error) {
          console.log(error);
      }
  }


});

  return (
    <>
       <h1 className="text-3xl font-light mb-4">Editar productor</h1>

<div className="flex justify-center mt-10">
    <div className="w-full max-w-3xl">
        <form
            onSubmit={formik.handleSubmit}
        >
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_productor">Id productor</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id_productor"
                    type="text"
                    placeholder="Id productor"
                    value={formik.values.id_productor}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    readOnly="true"

                />
            </div>
            { formik.touched.id_productor && formik.errors.id_productor ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.id_productor} </p>
                </div>
            ) : null }


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fincaid">Finca id</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fincaid"
                    type="text"
                    placeholder="Finca id"
                    value={formik.values.fincaid}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    readOnly="true"
                />
            </div>

            { formik.touched.fincaid && formik.errors.fincaid ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.fincaid} </p>
                </div>
            ) : null }


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombres">Nombres</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nombres"
                    type="text"
                    placeholder="Nombres"
                    value={formik.values.nombres}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.nombres && formik.errors.nombres ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.nombres} </p>
                </div>
            ) : null }

           

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidos">Apellidos</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="apellidos"
                    placeholder="Apellidos"
                    value={formik.values.apellidos}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.apellidos && formik.errors.apellidos ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.apellidos} </p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numero_cedula">Numero cedula</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="numero_cedula"
                    placeholder="Numero cedula"
                    value={formik.values.numero_cedula}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.numero_cedula && formik.errors.numero_cedula ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.numero_cedula} </p>
                </div>
            ) : null }

            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numero_telefono">Numero telefono</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="numero_telefono"
                    placeholder="Numero telefono"
                    value={formik.values.numero_telefono}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.numero_telefono && formik.errors.numero_telefono ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.numero_telefono} </p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comunidad">Comunidad</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="comunidad"
                    placeholder="Comunidad"
                    value={formik.values.comunidad}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.comunidad && formik.errors.comunidad ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.comunidad} </p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="municipio">Municipio</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="municipio"
                    placeholder="Municipio"
                    value={formik.values.municipio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.municipio && formik.errors.municipio ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.municipio} </p>
                </div>
            ) : null }



            <input
                type="submit"
                className="bg-blue-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                value="Actualizar productores"
            />
        </form>
    </div>
</div>
    </>
  );
}

export default EditarProductores;