import {gql} from '@apollo/react-hooks'

const GET_PROYECTOS = gql `

query{
    Proyectos{
        _id
        nombre
        estado
        fase
        lider
        objetivosgenerales{
            objetivos
        }
        objetivosespecificos{
            objetivos
        }
        presupuesto
        fechainicio
        fechafin
        estudiantes{
            nombres
            apellidos
            correo
            estado
        }
    }
}
`

const GET_PROYECTO = gql `
    query Proyectos($_id: String!){
        Proyecto(_id:$_id){
        _id
        nombre
        estado
        fase
        lider
        objetivosgenerales{
            objetivos
        }
        objetivosespecificos{
            objetivos
        }
        presupuesto
        fechainicio
        fechafin
        estudiantes{
            nombres
            apellidos
            correo
            estado
        }
    }
    }

`

export {GET_PROYECTOS, GET_PROYECTO}