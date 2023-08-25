const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { cursos: [], alumnos: [], colegios: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/cursos' }).done(response => {
			this.setState({ cursos: response.entity._embedded.cursos });
		});

		client({ method: 'GET', path: '/api/alumnos' }).done(response => {
			this.setState({ alumnos: response.entity._embedded.alumnos });
		});

		client({ method: 'GET', path: '/api/colegios' }).done(response => {
			this.setState({ colegios: response.entity._embedded.colegios });
		});

	}
	render() {
		return (
			<>
				<h1>Examen Final</h1>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Cursos" emoji="📚" />
						<CursoList cursos={this.state.cursos} />
						<Link to="/nuevo-curso">Nuevo curso</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Alumnos" emoji="👩‍🎓" />
						<AlumnosList alumnos={this.state.alumnos} />
						<Link to="/nuevo-alumno">Nuevo Alumnos</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Colegios" emoji="🏫" />
						<ColegioList colegios={this.state.colegios} />
						<Link to="/nueva-colegio">Nueva sede Colegio</Link>
					</div>
				</div>


			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class CursoList extends React.Component {
	render() {
		const cursos = this.props.cursos.map(curso =>
			<Curso key={curso._links.self.href} curso={curso} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Acciones</th>
					</tr>
					{cursos}
				</tbody>
			</table>
		)
	}
}
class AlumnosList extends React.Component {
	render() {
		const alumnos = this.props.alumnos.map(alumno =>
			<Alumno key={alumno._links.self.href} alumno={alumno} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{alumnos}
				</tbody>
			</table>
		)
	}
}
class ColegioList extends React.Component {
	render() {
		const colegios = this.props.colegios.map(colegio =>
			<Colegio key={colegio._links.self.href} colegio={colegio} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{colegios}
				</tbody>
			</table>
		)
	}
}

class Curso extends React.Component {
	render() {
		const id = this.props.curso._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.curso.nombre}</td>
				<td>{this.props.curso.categoria}</td>
				<td>
					<Link to={"/ver-curso/" + id}>Ver</Link> | 
					<Link to={"/editar-curso/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Alumno extends React.Component {
	render() {
		const id = this.props.alumno._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.alumno.nombre}</td>
				<td>
					<Link to={"/ver-alumno/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}
class Colegio extends React.Component {
	render() {
		const id = this.props.colegio._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.colegio.nombre}</td>
				<td>
					<Link to={"/ver-colegio/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage;