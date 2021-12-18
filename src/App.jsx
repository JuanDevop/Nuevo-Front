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
import jwt_decode from "jwt-decode";
import React from 'react'

function App() {

  const [token, setToken] = React.useState('')

  React.useEffect(()=>{

    setToken(localStorage.getItem('token'))
    if(!token){
        console.log("No existe token")
    }         
},[])

  return (
    <Router>
      { token ? <Navbar /> : null
      }
      
      <div className="container p-1">
      <Switch>
      
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/usuarios" component={Usuarios} />
          <Route exact path="/usuarios/editar/:_id" component={EditarUsuario} />
          <Route exact path="/listaproyectos" component={Proyectos} />
          <Route exact path="/proyectos/editar/:_id" component={EditarProyectos} />
      
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;
