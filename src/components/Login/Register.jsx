import React from 'react'
import {Link} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREAR_USUARIO } from '../../graphql/Usuarios/mutations';
import {withRouter} from 'react-router-dom'

const Register = (props) => {

   
    const [datosRegistro, setDatosRegistro ] = React.useState({estado:"Pendiente", rol:"Usuario"})
    const [createUser,{error,data}] = useMutation(CREAR_USUARIO,
        {
            onCompleted:(data) => {
                localStorage.setItem('token',data.token)
                props.history.push('/')
            }
        })


    return (
        <div className='row mt-3'>
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        Login
                    </div>
                    <div className="card-body">
                        <form className='row needs-validation' onSubmit={async e => {
                            e.preventDefault();
                            await createUser({
                                variables:{
                                    input: datosRegistro
                                }
                            })
                        }}>
                            <div>
                                <label htmlFor="validationCustom01" className="form-label">Nombres</label>
                                <input type="text" className="form-control" id="validationCustom01" required onChange={e => setDatosRegistro({...datosRegistro, nombres: e.target.value}) } />
                                    <div className="invalid-feedback">
                                        Por Favor Ingrese Un Nombre
                                    </div>
                            </div>
                            <div>
                                <label htmlFor="validationCustom02" className="form-label">Apellidos</label>
                                <input type="text" className="form-control" id="validationCustom02" required onChange={e => setDatosRegistro({...datosRegistro, apellidos: e.target.value}) } />
                                    <div className="invalid-feedback">
                                        Por Favor Ingrese Un Apellido
                                    </div>
                            </div>
                            <div>
                                <label htmlFor="validationCustom03" className="form-label">Documento</label>
                                <input type="text" className="form-control" id="validationCustom03" required onChange={e => setDatosRegistro({...datosRegistro, documento: e.target.value}) } />
                                    <div className="invalid-feedback">
                                        Por Favor Ingrese Un Documento Valido
                                    </div>
                            </div>
                            <div>
                                <label htmlFor="validationCustom04" className="form-label">Correo</label>
                                <input type="email" className="form-control" id="validationCustom04" required onChange={e => setDatosRegistro({...datosRegistro, correo: e.target.value}) } />
                                    <div className="invalid-feedback">
                                        Por Favor Ingrese Un Correo Valido
                                    </div>
                            </div>
                            <div>
                                <label htmlFor="validationCustom05" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="validationCustom05" required onChange={e => setDatosRegistro({...datosRegistro, contrasena: e.target.value}) } />
                                    <div className="invalid-feedback">
                                        Por Favor Ingrese la contraseña
                                    </div>
                            </div>
                            <div>
                                <label htmlFor="validationCustom04" className="form-label">Rol</label>
                                <select defaultValue="Usuario" className="form-select" id="validationCustom04" required onChange={e => setDatosRegistro({...datosRegistro, rol: e.target.value}) } >
                                    <option value="Usuario">Usuario</option>
                                    <option value="Lider">Lider</option>
                                    <option value="Administrador">Administrador</option>
                                </select>
                                <div className="invalid-feedback">
                                    Seleccione un rol 
                                </div>
                                <div className="col-12 mt-4">
                                    <button className="btn btn-success" type="submit">Registrarse</button>
                                    <Link to="/login">
                                    <button className='btn btn-primary ml-3'>
                                        Login
                                    </button>
                                    </Link>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register)
