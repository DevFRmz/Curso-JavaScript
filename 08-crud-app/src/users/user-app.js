import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderButton } from './presentation/render-button/render-button';
import { renderModal } from './presentation/render-modal/render-modal';
import { renderTable } from './presentation/render-table/render-table';
import UserStore from './store/users-store';
import { saveUser } from './use-cases/save-user';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element) => {
    element.innerHTML = `loading..`;
    await UserStore.loadNextPage();
    element.innerHTML = '';

    renderTable(element);
    renderButton(element);
    renderAddButton(element);
    renderModal(element, async(userLike) => {
        const user = await saveUser(userLike);
        console.log(user);
        UserStore.onUserChanged(user);
        renderTable();
    });
}