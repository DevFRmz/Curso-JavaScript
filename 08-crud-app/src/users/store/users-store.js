import { loadUserByPage } from "../use-cases/load-user-by-page";


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUserByPage(state.currentPage + 1);
    if(users.length === 0) return;
    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage = async() => {
    const users = await loadUserByPage(state.currentPage - 1);
    if(users.length === 0) return;
    state.currentPage -= 1;
    state.users = users;
}


const onUserChanged = (updatedUser) => {
    let wasFound = false;
    
    state.users = state.users.map(user => {
        if(user.id === updatedUser.id){
            wasFound = true;
            return updatedUser;
        }
        return user;
    })

    if(state.users.length < 10 && !wasFound){
        state.users.push(updatedUser);
    }
}

const reloadPage = async() => {
    const users = await loadUserByPage(state.currentPage);
    if(users.length === 0){
        await loadPreviousPage();
        return;
    }
    state.users = users;
}

const getCurrentPage = () => state.currentPage;

const getUsers = () => [...state.users];

const getLastPage = () => state.lastPage;

export default {
    reloadPage,
    onUserChanged,
    loadPreviousPage,
    loadNextPage,
    getUsers,
    getCurrentPage,
    getLastPage,
}