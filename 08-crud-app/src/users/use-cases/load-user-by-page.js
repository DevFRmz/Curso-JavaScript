import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page number page  
 * @returns {Promise<User[]>}
 */
export const loadUserByPage = async( page = 1 ) => {
    if(page < 1) return [];

    const nUsers = await totalUsers();
    //Math.ceil redondea hacia arriba el numero
    const nPages = Math.ceil(nUsers / 10);

    if(page > nPages) return [];

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const resolve = await fetch(url);
    const data = await resolve.json();
    
    const users = data.data.map( localhostUserToModel );
    return users;
}

const totalUsers = async() => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const resolve = await fetch(url);
    const data = await resolve.json();
    return data.length;
}