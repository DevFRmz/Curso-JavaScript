//solo funciona esta importacion con vite
import modalHTML from './render-modal.html?raw';
import './render-modal.css'
import { getUserById } from '../../use-cases/getUserById';
import { User } from '../../models/user';

let modal, form, loadedUser = {};


export const showModal = async(id) => {
    modal?.classList.remove('hide-modal');

    if(!id) return;

    const user = await getUserById(id);
    console.log(user);
    setValuesForm(user);
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    //resetear el formulario para que borre sus datos
    form?.reset();
}

/**
 * 
 * @param {User} user 
 */
const setValuesForm = (user) => {
    form.querySelector("[name='firstName']").value = user.firstName;
    form.querySelector("[name='lastName']").value = user.lastName;
    form.querySelector("[name='balance']").value = user.balance;
    form.querySelector("[name='isActive']").checked = user.isActive;
    loadedUser = user;
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {() => Promise} callback
 */
export const renderModal = (element, callback) => {
    if ( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';

    element.append(modal);
    
    modal.addEventListener('click', event => {
        if(event.target.className === 'modal-container'){
            hideModal();
        }
    });

    form = document.querySelector('form');

    form.addEventListener('submit', async event => {
        //quita las funciones por defecto, en este caso queremos quitar el refresh
        event.preventDefault();
        
        //FormData recibe un formulario y nos da los datos en forma de arreglo, cada posicion del arreglo tendra [key, value];
        const formData = new FormData(form);
        const userLike = {...loadedUser};
        
        for(const [key, value] of formData){
            if(key === 'balance'){
                userLike[key] = Number(value);
                continue;
            }

            if(key === 'isActive'){
                userLike[key] = (value === 'on') ? true : false; 
                continue;
            }

            userLike[key] = value;
        }
        
        //Guardar el usuario
        await callback(userLike);
        hideModal();
    });
} 

