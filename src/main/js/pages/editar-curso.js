const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarcursoPage = ()=>{

    const [curso, ] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/cursos/'+id
        }).done((response)=>setcurso(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/cursos/'+id,
            entity: curso,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar curso</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={curso.nombre} onChange={(e)=>setcurso({...curso, nombre: e.target.value})} /> <br/>
                <label>Categoria</label>
                <input type="text" id="categoria" name="categoria" value={curso.categoria} onChange={(e)=>setcurso({...curso, categoria: e.target.value})}  /> <br/>
                <label>Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={curso.descripcion} onChange={(e)=>setcurso({...curso, descripcion: e.target.value})}  /> <br/>
                
                <input type="submit" value="Editar curso" />
            </form>

        </>
    )
}

module.exports = EditarcursoPage