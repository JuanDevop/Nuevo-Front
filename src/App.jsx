import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Usuarios from './components/Usuarios/Usuarios';
import 'bootswatch/dist/flatly/bootstrap.min.css'
import EditarUsuario from './components/Usuarios/EditarUsuario.jsx';
import Proyectos from './components/Proyectos/Proyectos.jsx';
import EditarProyectos from './components/Proyectos/EditarProyectos.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Login/Register.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <div className="container p-1">
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/usuarios" component={Usuarios} />
          <Route exact path="/usuarios/editar/:_id" component={EditarUsuario} />
          <Route exact path="/listaproyectos" component={Proyectos} />
          <Route exact path="/proyectos/editar/:_id" component={EditarProyectos} />
      </div>
      </Switch>
      
    </Router>
  );
}

export default App;
