import React from 'react'
import { Link} from 'react-router-dom';


const Login = () => {
    return (
        <div className='row mt-3'>
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        Login
                    </div>
                    <div className="card-body">
                        <form className='row needs-validation'>
                            <div>
                                <label for="validationCustom04" className="form-label">Correo</label>
                                <input type="text" className="form-control" id="validationCustom04" required />
                                    <div class="invalid-feedback">
                                        Por Favor Ingrese Un Correo Valido
                                    </div>
                            </div>
                            <div>
                                <label for="validationCustom05" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="validationCustom05" required />
                                    <div class="invalid-feedback">
                                        Por Favor Ingrese la contraseña
                                    </div>
                            </div>
                            <div class="col-12 mt-4">
                                    <button class="btn btn-success" type="submit">Login</button>
                                    <Link to="/register">
                                    <button className='btn btn-primary ml-3'>
                                        Registrarme
                                    </button>
                                    </Link>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
