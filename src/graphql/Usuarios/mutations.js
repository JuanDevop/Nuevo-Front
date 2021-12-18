import {gql} from '@apollo/react-hooks'

const EDITAR_USUARIO = gql `
    mutation UpdateUser(
        $_id: String!
        $nombres: String!
        $apellidos: String!
        $documento: String!
        $correo: String!
        $rol: String!
        $estado: String! 
        ){
        updateUser(
        _id:$_id
        nombres: $nombres
        apellidos: $apellidos
        documento: $documento
        correo: $correo
        rol: $rol
        estado: $estado
        ){
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

const CREAR_USUARIO =   gql `
    mutation CreateUser($input: UserInput! ){
        createUser(
            input: $input
        ){
            _id
            rol
            token
        }
    }

`

export {EDITAR_USUARIO, CREAR_USUARIO}