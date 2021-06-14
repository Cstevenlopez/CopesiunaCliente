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
<div class="card">
    <div class="card-body">

<table class="table table-striped table-responsive rounded">
  <thead class="">
    <tr>
      <th>ID</th>
      <th>Productor</th>
      <th>Finca</th>
      <th>Nombres</th>
      <th>Apellidos</th>
      <th>Cédula</th>
      <th>Teléfono</th>
      <th>Comunidad</th>
      <th>Energia</th>
      <th>Acciones</th>
    </tr>
  </thead>
<tbody>
{data?.map((productor, index) => {
return (
<tr class="">
<td class="" key={index}>{productor.id}</td>
<td class="" key={index}>{productor.id_productor}</td>
<td class="" key={index}>{productor.fincaid}</td>
<td class="" key={index}>{productor.nombres}</td>
<td class="" key={index}>{productor.apellidos}</td>
<td class="" key={index}>{productor.numero_cedula}</td>
<td class="" key={index}>{productor.numero_telefono}</td>
<td class="" key={index}>{productor.comunidad}</td>
<td class="" key={index}>{productor.municipio}</td>

<td class="">
<form action="" method="post">

<button  onClick={() => pasarDatosProdutores(productor)} className="btn btn-info">Editar</button>
</form>

</td> 

</tr>
);
})
}
</tbody>
</table>
<div className="">
<Pagination
activePage={current_page}
totalItemsCount={total}
itemsCountPerPage={per_page}
onChange={(numeroPagina) => obtenerDatosProductores(numeroPagina)}
itemClass="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
linkClass="w-full px-4 py-2 border "
/>

</div> 
</div>
</div>

            </>
        )
    }
    return (
        <>
    <Link to="/productores" className="btn btn-info mt-5 ml-5 bold">
    <p >Agregar Productores</p>
    </Link>
    <div className="container mx-auto px-6 sm:px-10 ">
<div className="table mt-3">
<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
    {productores && renderizarListaProdutores()}
  </div>
</div>

</div>

        </>
    );
}
export default MostrarProductores;