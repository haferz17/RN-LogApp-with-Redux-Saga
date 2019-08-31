import data from '../components/UsersData';
// API
// const urlGetUsers = '';

function* getUsersFromApi() {
    // Get data from API
    // const response = yield fetch(urlGetUsers, {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: '',
    // });
    // const users = yield response.status === 200 ? response.json(): []
    return data
}
//send POST request to add new User
function* insertNewUserFromApi(newUser) {
    return newUser
}

export const Api = {
    getUsersFromApi,
    insertNewUserFromApi
}; 