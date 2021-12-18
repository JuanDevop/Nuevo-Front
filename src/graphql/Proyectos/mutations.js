import {gql} from '@apollo/react-hooks'

const EDITAR_PROYECTO = gql `
    mutation UpdateProyecto(
        $_id: String!, $input: ProyectoInput! 
    ){
        updateProyecto(
        _id:  $_id
        input: $input
    ){
       _id
    }
    }

`

export {EDITAR_PROYECTO}