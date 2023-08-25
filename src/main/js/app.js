const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');

// Alumnos
const NuevoAlumnoPage = require('./pages/nuevo-alumno');
const VerAlumnoPage = require('./pages/ver-alumno');

// Cursos

const VerCursoPage = require('./pages/ver-curso');
const NuevoCursoPage = require('./pages/nuevo-curso');
const EditarcursoPage = require('./pages/editar-curso');







const VerBandaPage = require('./pages/ver-colegio');
const NuevoIntegrantePage = require('./pages/nuevo-integrante');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },


	{ path: '/ver-curso/:id', element: <VerCursoPage /> },
	{ path: '/nuevo-curso', element: <NuevoCursoPage /> },
	{ path: '/editar-curso/:id', element: <EditarcursoPage /> },

	


	{ path: '/ver-alumno/:id', element: <VerAlumnoPage /> },
	{ path: '/nuevo-alumno', element: <NuevoAlumnoPage /> },



	
	{ path: '/ver-colegio/:id', element: <VerColegioPage /> },
	{ path: '/ver-colegio/:id/nuevo-integrante', element: <NuevoIntegrantePage /> },


])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
