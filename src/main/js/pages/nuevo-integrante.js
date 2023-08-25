const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoIntegrantePage = () => {

    let { id } = useParams();

    const [alumnos, setAlumnos] = useState([])
    const [cursos, setCursos] = useState([])
    
    const [idAlumno, setIdAlumno] = useState('')
    const [idCurso, setIdCurso] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/integrantes',
            entity: {
                banda: 'http://localhost:8080/api/colegios/'+id,
                alumno: 'http://localhost:8080/api/alumnos/'+idAlumno,
                curso: 'http://localhost:8080/api/cursos/'+idCurso},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/alumnos'
        }).done(response=>{
            setAlumnos(response.entity._embedded.alumnos)
        })
        client({
            method: 'GET',
            path: '/api/cursos'
        }).done(response=>{
            setCursos(response.entity._embedded.cursos)
        })

    },[])

    return (
        <>
            <h1>Nuevo Estudiante</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='alumno'>Alumno </label>
                <select name="alumno" id="alumno" onChange={(e)=>{setIdAlumno(e.target.value)}}>
                    {alumnos.map(alumno => {	
                        const value = alumno._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{alumno.nombre}]</option>
                        )
                    })}
                </select><br />
                
                <label>Curso </label>
                <select name="curso" id="curso" onChange={(e)=>{setIdCurso(e.target.value)}}>
                    {cursos.map(curso => {	
                        const value = curso._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>({curso.nombre})</option>
                        )
                    })}
                </select><br />

                <input type="submit" value="Nuevo Estudiante" />

            </form>
            <Link to="/">Regresar</Link>
        </>
    )
}

module.exports = NuevoIntegrantePage;