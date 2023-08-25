const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerColegioPage = () => {

    let { id } = useParams();
    const [colegio, setColegio] = useState({});
    const [integrantes, setIntegrantes] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/colegios/' + id
        }).done(response => setColegio(response.entity))
        client({
            method: 'GET',
            path: '/api/colegios/' + id + '/formacion'
        }).done(response => setIntegrantes(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Colegio</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{colegio.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Informacion</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Alumno</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>

                    {integrantes.map(integrante=>{
                        return(
                            <tr key={integrante.ID}>
                                <td>{integrante.MUSICO}</td>
                                <td>{integrante.INSTRUMENTO}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={`/ver-colegio/${id}/nuevo-integrante`}>Nuevo Integrante</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerColegioPage;