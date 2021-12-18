import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_PROYECTO} from '../../graphql/Proyectos/queries'
import { EDITAR_PROYECTO } from '../../graphql/Proyectos/mutations';

const EditarProyectos = () => {


    React.useEffect(()=>{
        
    },[])

    const {_id} = useParams();
    const [updateProyecto,{error}] = useMutation(EDITAR_PROYECTO)

    const estado = ["Activo", "Inactivo"]
    const fase = ["En desarrollo", "Terminado"]
    const [datosProyecto, setDatosProyecto] = React.useState({})

    const {loading,data} =  useQuery(GET_PROYECTO,
        {variables:{_id},
        onCompleted: (data) => setDatosProyecto(data.Proyecto)
        },
        );

        console.log(datosProyecto)

        


    if(loading){
        return <div>Loading....</div>
    }  

    const enviarinfo = (e) => {
        e.preventDefault()
        setDatosProyecto(delete datosProyecto.__typename)
        setDatosProyecto(delete datosProyecto._id)
        setDatosProyecto( datosProyecto.estudiantes.map(e => delete e.__typename) )
        setDatosProyecto( datosProyecto.objetivosgenerales.map(e => delete e.__typename) )
        setDatosProyecto( datosProyecto.objetivosespecificos.map(e => delete e.__typename) )


        console.log(datosProyecto)
        updateProyecto({
            variables:{
                _id: _id,
                input: datosProyecto
            }
        })
    }

    if(data){
    return (
            <div className='container'>
                <button className='btn btn-success mt-3 mb-3 mr-3' onClick={ e => enviarinfo(e)}>
                                Actualizar
                </button>
                <Link to="/listaproyectos">
                <button className='btn btn-danger mt-3 mb-3'>
                                Salir
                </button>
                </Link>
            <div className='row mt-3'>
                <div className="col-md-4">
                    <div className="card ">
                        <div className="card-header">Editar Proyecto</div>
                        <div className="card-body ">
                            <form >
                            <div className="form-group">
                                <label className='form-label'> Nombre</label>
                                <input type="text" value={datosProyecto.nombre} className='form-control' onChange={e => setDatosProyecto({...datosProyecto, nombre: e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className='form-label'> Estado</label>
                                <select className="form-select" defaultValue={datosProyecto.estado} aria-label="Default select example" onChange={e => setDatosProyecto({...datosProyecto, estado: e.target.value})} >
                                    {
                                        estado.map(e => {
                                           return(
                                            <option key={e} value={e}>{e}</option>
                                           )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label className='form-label'> Fase </label>
                                <select className="form-select" defaultValue={datosProyecto.fase} aria-label="Default select example" onChange={e => setDatosProyecto({...datosProyecto, fase: e.target.value})} >
                                    {
                                        fase.map(e => {
                                           return(
                                            <option key={e} value={e}>{e}</option>
                                           )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label className='form-label'> Lider</label>
                                <input type="text" className='form-control' value={datosProyecto.lider} onChange={e => setDatosProyecto({...datosProyecto, lider: e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className='form-label'> Presupuesto</label>
                                <input type="text" className='form-control' value={datosProyecto.presupuesto} onChange={e => setDatosProyecto({...datosProyecto, presupuesto: e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className='form-label'> Fecha Finalizacion</label>
                                <input type="date" className='form-control' value={datosProyecto.fechafin} onChange={e => setDatosProyecto({...datosProyecto, fechafin: e.target.value})}/>
                            </div>
                            <br />
                            <div>
                            <h5> Objetivos Generales </h5>
                            <ul className="list-group list-group-numbered">
                                    {
                                        data.Proyecto.objetivosgenerales.map(e => (
                                            <li key={e.objetivos} className="list-group-item">
                                                <input type="text" className='form-control' value={e.objetivos} />
                                            </li>
                                        ))
                                    }
                            </ul>
                            </div>
                            <br />
                            <div>
                            <h5> Objetivos Especificos </h5>
                            <ul className="list-group list-group-numbered">
                                        {
                                            data.Proyecto.objetivosespecificos.map(e => (
                                                <li key={e.objetivos} className="list-group-item">
                                                    <input type="text" className='form-control' value={e.objetivos} />
                                                </li>
                                            ))
                                        }
                            </ul>
                            </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card ">
                        <div className="card-header">Lista Estudiantes</div>
                        <div className="card-body ">
                        <table className='table table-hover table-auto'>
                            <thead>
                                <tr>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">Correo</th>
                                    <th scope="col">Estado</th> {/* // Pendiente, Aceptado, Rechazado */}
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        data.Proyecto.estudiantes.map((datos,i) => (
                                            <tr key={datos.correo} >
                                                <td>{datos.nombres}</td>
                                                <td>{datos.apellidos}</td>
                                                <td>{datos.correo}</td>
                                                <td>
                                                <select className="form-select" 
                                                id={i}
                                                defaultValue={datos.estado} 
                                                aria-label="Default select example" 
                                                onChange={e => {
                                                    const i = e.target.id
                                                    datosProyecto.estudiantes[i] = {...datosProyecto.estudiantes[i], estado: e.target.value}
                                                    const estud = datosProyecto.estudiantes
                                                    setDatosProyecto({...datosProyecto, estudiantes: estud})
                                                }} >
                                                    <option value="Pendiente" > Pendiente</option>
                                                    <option value="Aceptado" > Aceptado</option>
                                                    <option value="Rechazado" > Rechazado</option>
                                                </select>    
                                                </td>
                                            </tr>
                                        ))
                                    }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                
    
    )
}}

export default EditarProyectos
