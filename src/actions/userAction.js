import axios from 'axios';

export const getUsers = () => {
    return (dispatch) => {
        axios.get('http://192.168.1.2:8080/users')
        .then(response => {
            console.log(response);
            dispatch({
                type: 'LIST_USERS',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const setUser = userId => {
    return {
        type: 'SET_USER',
        payload: userId
    }
}

export const addUser = userObj => {
    return (dispatch) => {
        axios.post('http://192.168.1.2:8080/users', userObj)
        .then(response => {
            dispatch({
                type: 'ADD_USER',
                payload: response.data
            }) 
        })
        .catch(error => {
            console.log(error);
        });
    }
}