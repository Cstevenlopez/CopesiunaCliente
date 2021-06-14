import React from 'react';
import apiClient from '../services/api';

const Books = (props) => {
    const [fincas, setFincas] = React.useState([]);
    React.useEffect(() => {
        if (props.loggedIn) {
            apiClient.get('/api/fincas')
            .then(response => {
                setFincas(response.data)
            })
            .catch(error => console.error(error));
        }
    }, []);
    const fincaList = fincas.map((finca) => 
        <div key={finca.id_finca}
            className="list-group-item"
        >
            <h5>{finca.nombre}</h5>
            <small>{finca.municipio}</small>
        </div>
    );
    if (props.loggedIn) {
        return (
            <div className="list-group">{fincaList}</div>
        );
    }
    return (
        <div className="alert alert-warning">You are not logged in.</div>
    );
};

export default Books;