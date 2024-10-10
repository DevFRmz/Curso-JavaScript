import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { userToLocalhost } from '../mappers/user-to-localhost.mapper';
import {User} from '../models/user'


export const saveUser = async(userLIke) => {

    const user = new User(userLIke);
    
    if(!user.lastName || !user.firstName)
        throw 'First and last name is required';

    const userToSave = userToLocalhost(user);

    let updatedUser;
    //si tiene un id entonces hacemos una actualizacion del usuario, si no entonces no entramos al if y lo creamos
    if(user.id){
        updatedUser = await updateUser(userToSave);
    } else {
        updatedUser = await createUser(userToSave);
    }
    
    return localhostUserToModel(updatedUser);
}


const createUser = async(user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    //si todo sale bien nos devuelve nuestro objeto creado
    const newUser = await res.json();
    console.log({newUser});
    return newUser;
}

/**
 * 
 * @param {User} user 
 * @returns 
 */
const updateUser = async(user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    //si todo sale bien nos devuelve nuestro objeto creado
    const updatedUser = await res.json();
    return updatedUser;
}