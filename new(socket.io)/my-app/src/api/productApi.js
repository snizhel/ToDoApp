import axiosClient from "./axiosClient";
import { useAuth0 } from '@auth0/auth0-react';
let userData = null;
const productApi = {

    getAll: (params) => {
        const url = '/todos';
        return axiosClient.get(url, { params });
    },
    getAllByUser: (email) => {
        const url = `/todosUser?email=${email}`
        return axiosClient.get(url);
    },
    delete: (id) => {
        const url = `/delete?id=${id}`
        return axiosClient.delete(url);
    },
    create: (name, message, user) => {
        const url = `/createTodo`
        return axiosClient.post(url, {
            name: name,
            message: message,
            user: user
        })
    },
    getUser: () => {
        return userData;
    },
    addUser: (data) => {
        userData = null;
        userData = data;
    },
    update: (id, name, message) => {
        const url = `/update`
        return axiosClient.put(url, {
            id: id,
            name: name,
            message: message,
            user:{data:userData}
        })
    },


}
export default productApi;