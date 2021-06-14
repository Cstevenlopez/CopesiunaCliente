import React, { useState, useEffect, button } from 'react';
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
<div className="card">
<div className="card-body">

<table class="table table-striped table-responsive rounded">
  <thead class="">
    <tr>
      <th>ID de finca</th>
      <th>Nombre</th>
      <th>Legalidad</th>
      <th>comunidad</th>
      <th>Municipio</th>
      <th>Depto</th>
      <th>Pais</th>
      <th>Energia</th>
      <th>Agua</th>
      <th>Acciones</th>
    </tr>
  </thead>
<tbody>
{data?.map((finca, index) => {
return (
<tr>
<td class="" key={index}>{finca.id_finca}</td>
<td class="" key={index}>{finca.nombre}</td>
<td class="" key={index}>{finca.legalidad}</td>
<td class="" key={index}>{finca.comunidad}</td>
<td class="" key={index}>{finca.municipio}</td>
<td class="" key={index}>{finca.departamento}</td>
<td class="" key={index}>{finca.pais}</td>
<td class="" key={index}>{finca.disponibilidad_energia}</td>
<td  key={index}>{finca.disponibilidad_agua}</td>

<td class="">
<form action="" method="post">
<button  onClick={() => pasarDatosFincas(finca)}  class="btn btn-info">Editar</button>
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
onChange={(numeroPagina) => obtenerDatosFincas(numeroPagina)}
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

<Link to="/fincas" className="btn btn-info mt-5 ml-5 bold">
<p >Agregar finca</p>
</Link>
<div className="container mx-auto px-6 sm:px-10 ">
<div className="table mt-3">
<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
{fincas && renderizarListaFincas()}
</div>
</div>

</div>

</>
);
}

export default MostrarFincas;