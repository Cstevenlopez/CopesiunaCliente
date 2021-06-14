import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
            <div className="p-6">
              <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Copesiuna</p>

              <p className="mt-3 text-gray-600">Registros:</p>

            <nav className="mt-10">
                <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/mostrarfincas">Fincas</NavLink>
                <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/mostrarvitacoras">Vitacoras</NavLink>
                <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/mostrarProductores">Productores</NavLink>
                
            </nav>
            </div>
        </div>
     );
}

export default Sidebar;