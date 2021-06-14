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
<div class="card">
    <div class="card-body">
<table class="table table-striped table-responsive rounded">
  <thead class="">
    <tr>
      <th>ID</th>
      <th>Actividad</th>
      <th>Objetivo</th>
      <th>Temas</th>
      <th>Dificultades</th>
      <th>Soluciones</th>
      <th>Recomendaciones</th>
      <th>Fecha</th>
      <th>Sif-visita</th>
      <th>Productor</th>
      <th>Usuario</th>
      <th>Acciones</th>
    </tr>
  </thead>
<tbody>
{data?.map((vitacora, index) => {
return (
<tr class="">
<td class="" key={index}>{vitacora.id_vitacora}</td>
<td class="" key={index}>{vitacora.actividad}</td>
<td class="" key={index}>{vitacora.objetivo}</td>
<td class="" key={index}>{vitacora.temas_abordados}</td>
<td class="" key={index}>{vitacora.dificultades}</td>
<td class="" key={index}>{vitacora.soluciones}</td>
<td class="" key={index}>{vitacora.recomendaciones}</td>
<td class="" key={index}>{vitacora.fecha}</td>
<td class="" key={index}>{vitacora.siguiente_visita}</td>
<td class="" key={index}>{vitacora.productorid}</td>
<td class="" key={index}>{vitacora.usuario_id}</td>

<td class="">
<form action="" method="post">

<button  onClick={() => pasarDatosVitacoras(vitacora)} className="btn-info btn">Editar</button>
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
onChange={(numeroPagina) => obtenerDatosVitacoras(numeroPagina)}
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
    <Link to="/vitacoras" className="btn btn-info mt-5 ml-5 bold">
    <p >Agregar Productores</p>
    </Link>
    <div className="container mx-auto px-6 sm:px-10 ">
<div className="table mt-3">
<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
    {vitacoras && renderizarListaVitacoras()}
  </div>
</div>

</div>

        </>
);
}

export default MostrarVitacoras;