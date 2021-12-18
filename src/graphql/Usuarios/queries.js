import {gql} from '@apollo/react-hooks'

const GET_USUARIOS = gql `
    query{
        Usuarios{
        _id
        nombres
        apellidos
        documento
        correo
        rol
        estado
         }  
    }
`

const GET_USUARIO = gql `
    query Usuario($_id: String!){
        Usuario(_id: $_id){
            nombres
            apellidos
            documento
            correo
            rol
            estado
        }
    }

`

export {GET_USUARIOS, GET_USUARIO};