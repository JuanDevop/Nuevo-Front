import React from 'react'
import { GET_USUARIO } from '../../graphql/Usuarios/queries'
import { EDITAR_USUARIO } from '../../graphql/Usuarios/mutations';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks'

const EditarUsuario = () => {

     const {_id} = useParams();
     const [updateUser] = useMutation(EDITAR_USUARIO)  


    const roles = ["Administrador","Lider","Usuario"]
    const estado = ["Pendiente", "Autorizado"]
    const [datosUsuario, setDatosUsuario] = React.useState({})
    const {loading,error, data} = useQuery(GET_USUARIO,
        {variables:{_id},
        onCompleted: (data) => setDatosUsuario(data.Usuario)},
        );


    if(loading){
            return(
                <div>Cargando.....</div>
            )
    }
   if(data){
       console.log('funciona')
   
    return (
        <div className='row mt-3'>
            <div className="col-md-6 offset-md-3">
                <div className="card ">
                    <div className="card-header">Editar Usuario</div>
                    <div className="card-body ">
                        <form onSubmit={e => {
                            e.preventDefault();
                            console.log(datosUsuario.nombres)
                            updateUser({variables:{
                                _id:_id, 
                                nombres: datosUsuario.nombres,
                                apellidos: datosUsuario.apellidos,
                                documento: datosUsuario.documento,
                                correo: datosUsuario.correo,
                                rol: datosUsuario.rol,
                                estado: datosUsuario.estado
                            }})
                        }}>
                            <div className="form-group">
                                <label className='form-label'> Nombres</label>
                                <input type="text" value={datosUsuario.nombres} className='form-control' onChange={e => setDatosUsuario({...datosUsuario, nombres: e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className='form-label'> Apellidos</label>
                                <input type="text" value={datosUsuario.apellidos} className='form-control' onChange={e => setDatosUsuario({...datosUsuario, apellidos: e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className='form-label'> Documento</label>
                                <input type="text" value={datosUsuario.documento} className='form-control' onChange={e => setDatosUsuario({...datosUsuario, documento: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label className='form-label'> Correo</label>
                                <input type="text" value={datosUsuario.correo} className='form-control' onChange={e => setDatosUsuario({...datosUsuario, correo: e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className='form-label'> Rol</label>
                                <select className="form-select"  defaultValue={data.Usuario.rol} aria-label="Default select example" onChange={e => setDatosUsuario({...datosUsuario, rol: e.target.value})} >
                                    {
                                        roles.map(e => {
                                           return(
                                            <option key={e} value={e}>{e}</option>
                                           )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label className='form-label'> Estado</label>
                                <select className="form-select" defaultValue={data.Usuario.estado} aria-label="Default select example" onChange={e => setDatosUsuario({...datosUsuario, estado: e.target.value})} >
                                    {
                                        estado.map(e => {
                                           return(
                                            <option key={e} value={e}>{e}</option>
                                           )
                                        })
                                    }
                                </select>
                            </div>
                            <br />
                            <button className='btn btn-success ' type='submit'>
                                Actualizar
                            </button>
                            <Link to="/usuarios">
                            <button className='btn btn-danger ml-3'>
                                Cancelar
                            </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}}

export default EditarUsuario
