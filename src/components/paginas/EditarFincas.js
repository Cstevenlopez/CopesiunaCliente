import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useNavigate} from 'react-router-dom';

const EditarFincas = ({finca}) => {
   
  // Hook para redireccionar
   const navigate = useNavigate();
 // validación y leer los datos del formulario
 const formik = useFormik({
  initialValues: {
    id: finca.id,
    id_finca: finca.id_finca,  
    nombre: finca.nombre,
    legalidad: finca.legalidad,
    comunidad: finca.comunidad,
    municipio: finca.municipio,
    departamento: finca.departamento,  
    pais: finca.pais,
    disponibilidad_energia: finca.disponibilidad_energia,
    disponibilidad_agua: finca.disponibilidad_agua,
      
  }, 
  validationSchema: Yup.object({
    id_finca: Yup.string()
                  .required('El id de la finca es obliatorio'),
    nombre: Yup.string()
                  .required('El nombre es obligatorio'),
    legalidad: Yup.string()
                  .required('El tipo de lealidad es necesaria'),
    comunidad: Yup.string()
                  .required('El nombre de la comunidad es necesaria'),
    municipio: Yup.string()
                  .required('El nombre del municipio es obliatorio'),
    departamento: Yup.string()
                  .required('El nombre del departamento es obliatorio'),
    pais: Yup.string()
                  .required('El nombre del pais es obliatorio'),
    disponibilidad_energia: Yup.string()
                  .required('La disponivilidad de energia es necesaria'),
    disponibilidad_agua: Yup.string()
                  .required('La disponivilidad de agua es necesaria'),
                  
  }),
  onSubmit: finca => {
      try {   
          let config={
            method:'put',
            url:`https://murmuring-wave-68820.herokuapp.com/api/fincas/${finca.id}`,
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            data:finca
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
          navigate('/mostrarfincas');
      } catch (error) {
          console.log(error);
      }
  }


});

  return (
    <>
       <h1 className="text-3xl font-light mb-4">Editar Finca</h1>

<div className="flex justify-center mt-10">
    <div className="w-full max-w-3xl">
        <form
            onSubmit={formik.handleSubmit}
        >
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_finca">Id Finca</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id_finca"
                    type="text"
                    placeholder="Id Finca"
                    value={formik.values.id_finca}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    readOnly="true"

                />
            </div>
            { formik.touched.id_finca && formik.errors.id_finca ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.id_finca} </p>
                </div>
            ) : null }


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nombre"
                    type="text"
                    placeholder="Nombre"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.nombre && formik.errors.nombre ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.nombre} </p>
                </div>
            ) : null }


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="legalidad">Legalidad</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="legalidad"
                    type="text"
                    placeholder="Legalidad"
                    value={formik.values.legalidad}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.legalidad && formik.errors.legalidad ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.legalidad} </p>
                </div>
            ) : null }

           

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comunidad">Comunidad</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="comunidad"
                    placeholder="comunidad"
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

            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departamento">Departamento</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="departamento"
                    placeholder="Departamento"
                    value={formik.values.departamento}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.departamento && formik.errors.departamento ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.departamento} </p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pais">Pais</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="pais"
                    placeholder="Pais"
                    value={formik.values.pais}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.pais && formik.errors.pais ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.pais} </p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="disponibilidad_energia">Disponibilidad Energia</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="disponibilidad_energia"
                    placeholder="Disponibilidad Energia"
                    value={formik.values.disponibilidad_energia}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.disponibilidad_energia && formik.errors.disponibilidad_energia ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.disponibilidad_energia} </p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="disponibilidad_agua">Disponibilidad Agua</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="disponibilidad_agua"
                    placeholder="Disponibilidad Agua"
                    value={formik.values.disponibilidad_agua}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.disponibilidad_agua && formik.errors.disponibilidad_agua ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.disponibilidad_agua} </p>
                </div>
            ) : null }

            <input
                type="submit"
                className="bg-blue-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                value="Actualizar Fincas"
            />
        </form>
    </div>
</div>
    </>
  );
}

export default EditarFincas;