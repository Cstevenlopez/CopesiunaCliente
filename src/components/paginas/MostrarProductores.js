import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import {useNavigate} from 'react-router-dom';

import { NavLink,Link } from 'react-router-dom';
const MostrarProductores = ({guardarProductor}) => {
    const [productores, setProductores] = useState({});

    const navigate = useNavigate();

const pasarDatosProdutores = (item) => {
    console.log(item);
    guardarProductor(item);
    navigate('/EditarProductores');
}
    const obtenerDatosProductores = async (numeroPagina = 1) => {
        const url = `https://murmuring-wave-68820.herokuapp.com/api/productores?page=${numeroPagina}`;
        const response = await axios.get(url);
        console.log('response',response.data);
        setProductores(response.data);
    }

    useState(() => {
        obtenerDatosProductores();
    }, []);

    const renderizarListaProdutores = () => {
        const { data, current_page, per_page, total } = productores;

        return (
            <>
            
                        <table class="table p-4 bg-white shadow rounded-lg">
                            <thead>
                                <tr>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Id
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Id productor
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Finca id
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Nombres
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Apellidos
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Numero cedula
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Numero telefono
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Comunidad
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Municipio
            </th>
                                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap bg-gray-700 text-white font-bold">
                                        Acciones
            </th>
            

                             
                                </tr>
                                
                                
                            </thead>
                            <tbody>
                                {data?.map((productor, index) => {
                                    return (
                                        <tr class="text-gray-700">
                                            <td class="border p-4 dark:border-dark-5" key={index}>{productor.id}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{productor.id_productor}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{productor.fincaid}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{productor.nombres}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{productor.apellidos}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{productor.numero_cedula}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{productor.numero_telefono}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{productor.comunidad}</td>
                                            <td class="border p-4 dark:border-dark-5" key={index}>{productor.municipio}</td>
                                           
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <form action="" method="post">

                                            <button  onClick={() => pasarDatosProdutores(productor)} className="bg-blue-800  text-white font-bold border p-4 dark:border-dark-5">Editar</button>
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
                        onChange={(numeroPagina) => obtenerDatosProductores(numeroPagina)}
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
    <Link to="/productores" className="text-3xl bg-green-600 hover:bg-black inline-block mb-30 p-5 ml-4 text-white font-bold">
    <p >Agregar Productores</p>
    </Link>
    <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
    <div className="-mx-4 sm:-mx-40 px-4 sm:px-8 py-5 overflow-x-auto">
  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
    {productores && renderizarListaProdutores()}
  </div>
</div>

</div>

        </>
    );
}

export default MostrarProductores;