import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import './render-button.css';

/**
 * @param {HTMLDivElement} element 
 */
export const renderButton = (element) => {

    const nextPage = document.createElement('button');
    nextPage.innerText = 'Next >';

    const prevPage = document.createElement('button');
    prevPage.innerText = '< Previous';

    const currentPage = document.createElement('span');
    currentPage.id = 'current-page';
    currentPage.innerText = `${usersStore.getCurrentPage()}`;


    element.append( prevPage, currentPage, nextPage );

    nextPage.addEventListener('click', async() => {
        await usersStore.loadNextPage();
        currentPage.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });

    prevPage.addEventListener('click', async() => {
        await usersStore.loadPreviousPage();
        currentPage.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });
}