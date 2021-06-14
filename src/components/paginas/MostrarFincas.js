import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import {useNavigate} from 'react-router-dom';

import { NavLink,Link } from 'react-router-dom';
const MostrarFincas = ({guardarFinca}) => {
    const [fincas, setFincas] = useState({});

    const navigate = useNavigate();

const pasarDatosFincas = (item) => {
    console.log(item);
    guardarFinca(item);
    navigate('/EditarFincas');
}
    const obtenerDatosFincas = async (numeroPagina = 1) => {
        const url = `https://murmuring-wave-68820.herokuapp.com/api/fincas?page=${numeroPagina}`;
        const response = await axios.get(url);
        console.log('response',response.data);
        setFincas(response.data);
    }

    useState(() => {
        obtenerDatosFincas();
    }, []);

    const renderizarListaFincas = () => {
        const { data, current_page, per_page, total } = fincas;

        return (
            <>
            
                        <table class="table p-4 bg-white shadow rounded-lg">
                            <thead>
                                <tr>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Id
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Id finca
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Nombre
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Legalidad
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Comunidad
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Municipio
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Departamento
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Pais
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Energia
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Agua
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Acciones
            </th>
            

                             
                                </tr>
                                
                                
                            </thead>
                            <tbody>
                                {data?.map((finca, index) => {
                                    return (
                                        <tr class="text-gray-700">
                                            <td class="border p-4 dark:border-dark-5" key={index}>{finca.id}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{finca.id_finca}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{finca.nombre}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{finca.legalidad}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{finca.comunidad}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{finca.municipio}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{finca.departamento}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{finca.pais}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{finca.disponibilidad_energia}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{finca.disponibilidad_agua}</td>
                                           
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <form action="" method="post">

                                            <button  onClick={() => pasarDatosFincas(finca)} className="bg-blue-800  text-white font-bold border p-4 dark:border-dark-5">Editar</button>
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
                        onChange={(numeroPagina) => obtenerDatosFincas(numeroPagina)}
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
    <Link to="/fincas" className="text-3xl bg-green-600 hover:bg-black inline-block mb-30 p-5 text-white font-bold">
    <p >Agregar finca</p>
    </Link>
    <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
    <div className="-mx-4 sm:-mx-40 px-4 sm:px-8 py-5 overflow-x-auto">
  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
    {fincas && renderizarListaFincas()}
  </div>
</div>

</div>

        </>
    );
}

export default MostrarFincas;