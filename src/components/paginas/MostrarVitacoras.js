import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import {useNavigate} from 'react-router-dom';

import { NavLink,Link } from 'react-router-dom';
const MostrarVitacoras = ({guardarVitacora}) => {
    const [vitacoras, setVitacoras] = useState({});

    const navigate = useNavigate();

const pasarDatosVitacoras = (item) => {
    console.log(item);
    guardarVitacora(item);
    navigate('/EditarVitacoras');
}
    const obtenerDatosVitacoras = async (numeroPagina = 1) => {
        const url = `https://murmuring-wave-68820.herokuapp.com/api/vitacoras?page=${numeroPagina}`;
        const response = await axios.get(url);
        console.log('response',response.data);
        setVitacoras(response.data);
    }

    useState(() => {
        obtenerDatosVitacoras();
    }, []);

    const renderizarListaVitacoras = () => {
        const { data, current_page, per_page, total } = vitacoras;

        return (
            <>
            
                        <table class="table p-4 bg-white shadow rounded-lg">
                            <thead>
                                <tr>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Id
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Id vitacora
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Actividad
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Objetivo
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Temas abordados
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Dificultades
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Soluciones
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Recomendaciones
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Fecha
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Siguiente visita
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Productor id
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Usuario id
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Acciones
            </th>
            

                             
                                </tr>
                                
                                
                            </thead>
                            <tbody>
                                {data?.map((vitacora, index) => {
                                    return (
                                        <tr class="text-gray-700">
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.id}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.id_vitacora}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.actividad}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.objetivo}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.temas_abordados}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.dificultades}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.soluciones}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.recomendaciones}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.fecha}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.siguiente_visita}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.productorid}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{vitacora.usuario_id}</td>
                                           
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <form action="" method="post">

                                            <button  onClick={() => pasarDatosVitacoras(vitacora)} className="bg-blue-800  text-white font-bold border p-4 dark:border-dark-5">Editar</button>
                                            </form>
                                           
                                            </td> 
                                            
                                        </tr>
                                    );
                                })
                                
                                }



                            </tbody>
                          
                        </table>
                    <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between ">
                    <Pagination
                        activePage={current_page}
                        totalItemsCount={total}
                        itemsCountPerPage={per_page}
                        onChange={(numeroPagina) => obtenerDatosVitacoras(numeroPagina)}
                        itemClass="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                        linkClass="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100 "
                    />

                </div>
            </>
        )
    }




    return (
        <>
     <h1 className="px-50 text-6xl font-light mb-40"></h1>
    <Link to="/vitacoras" className="text-3xl bg-green-600 hover:bg-black inline-block mb-30 p-5 text-white font-bold">
    <p >Agregar Vitacora</p>
    </Link>
    <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
    <div className="-mx-4 sm:-mx-40 px-4 sm:px-8 py-5 overflow-x-auto">
  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
    {vitacoras && renderizarListaVitacoras()}
  </div>
</div>

</div>

        </>
    );
}

export default MostrarVitacoras;