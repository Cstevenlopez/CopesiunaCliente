import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useNavigate} from 'react-router-dom';

const EditarVitacoras = ({vitacora}) => {
   
  // Hook para redireccionar
   const navigate = useNavigate();
 // validación y leer los datos del formulario
 const formik = useFormik({
    initialValues: {
    id: vitacora.id,
    id_vitacora: vitacora.id_vitacora,
    actividad: vitacora.actividad,
    objetivo: vitacora.objetivo,
    temas_abordados: vitacora.temas_abordados,
    dificultades: vitacora.dificultades,
    soluciones: vitacora.soluciones,
    recomendaciones: vitacora.recomendaciones,
    fecha: vitacora.fecha,
    siguiente_visita: vitacora.siguiente_visita,
    productorid: vitacora.productorid,
    usuario_id: vitacora.usuario_id,
      
  }, 
  validationSchema: Yup.object({
    id_vitacora: Yup.string()
                  .required('El id del vitadora es obligatorio'),
    actividad: Yup.string()
                  .required('La actividad es obligatorio'),
    objetivo: Yup.string()
                  .required('El objetivo  es necesario'),
    temas_abordados: Yup.string()
                  .required('Los temas obordados es necesario'),
    dificultades: Yup.string()
                  .required('Las dificultades es obligatorio'),
    soluciones: Yup.string()
                  .required('Las soluciones es necesario'),
    recomendaciones: Yup.string()
                  .required('las recomendaciones es un campo necesario'),
    fecha: Yup.string()
                  .required('La fecha es obligatorio'),  
    siguiente_visita: Yup.string()
                  .required('La fecha de la siguiente visita es obligatorio'),        
    productorid: Yup.string()
                  .required('El id del productor es necesario'), 
    usuario_id: Yup.string()
                  .required('El id del usuario es necesario'),
                  
  }),
  onSubmit: vitacora => {
      try {   
          let config={
            method:'put',
            url:`https://murmuring-wave-68820.herokuapp.com/api/vitacoras/${vitacora.id}`,
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            data:vitacora
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
          navigate('/mostrarvitacoras');
      } catch (error) {
          console.log(error);
      }
  }


});

  return (
    <>
       <h1 className="text-3xl font-light mb-4">Editar Vitacora</h1>

<div className="flex justify-center mt-10">
    <div className="w-full max-w-3xl">
        <form
            onSubmit={formik.handleSubmit}
        >
  <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_vitacora">Id vitacora</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id_vitacora"
                    type="text"
                    placeholder="Id vitacora"
                    value={formik.values.id_vitacora}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    readOnly="true"
                />
            </div>
            { formik.touched.id_vitacora && formik.errors.id_vitacora ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.id_vitacora} </p>
                </div>
            ) : null }


            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="actividad">Actividad</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="actividad"
                    type="text"
                    placeholder="Actividad"
                    value={formik.values.actividad}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.actividad && formik.errors.actividad ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.actividad} </p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="objetivo">Objetivo</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="objetivo"
                    type="text"
                    placeholder="Objetivo"
                    value={formik.values.objetivo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.objetivo && formik.errors.objetivo ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.objetivo} </p>
                </div>
            ) : null }

           

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="temas_abordados">Temas abordados</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="temas_abordados"
                    placeholder="Temas abordados"
                    value={formik.values.temas_abordados}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.temas_abordados && formik.errors.temas_abordados ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.temas_abordados} </p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dificultades">Dificultades</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="dificultades"
                    placeholder="Dificultades"
                    value={formik.values.dificultades}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.dificultades && formik.errors.dificultades ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.dificultades} </p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="soluciones">Soluciones</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="soluciones"
                    placeholder="Soluciones"
                    value={formik.values.soluciones}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.soluciones && formik.errors.soluciones ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.soluciones} </p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recomendaciones">Recomendaciones</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="recomendaciones"
                    placeholder="Recomendaciones"
                    value={formik.values.recomendaciones}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.recomendaciones && formik.errors.recomendaciones ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.recomendaciones} </p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">Fecha</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="fecha"
                    type="date"
                    placeholder="Fecha"
                    value={formik.values.fecha}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.fecha && formik.errors.fecha ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.fecha}</p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="siguiente_visita">Siguiente visita</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="siguiente_visita"
                    type="date"
                    placeholder="Siguiente visita"
                    value={formik.values.siguiente_visita}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

            { formik.touched.siguiente_visita && formik.errors.siguiente_visita ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.siguiente_visita}</p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productorid">Productor id</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="productorid"
                    placeholder="Productor id"
                    value={formik.values.productorid}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    readOnly="true"
                />
            </div>

            { formik.touched.productorid && formik.errors.productorid ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.productorid}</p>
                </div>
            ) : null }

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario_id">Usuario id</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="usuario_id"
                    placeholder="Usuario id"
                    value={formik.values.usuario_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    readOnly="true"
                />
            </div>

            { formik.touched.usuario_id && formik.errors.usuario_id ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.usuario_id}</p>
                </div>
            ) : null }



            <input
                type="submit"
                className="bg-blue-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                value="Actualizar Vitacoras"
            />
        </form>
    </div>
</div>
    </>
  );
}

export default EditarVitacoras;