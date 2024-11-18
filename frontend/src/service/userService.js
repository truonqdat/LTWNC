import axios from 'axios'

const login = async (username, pass) => {
    const response = await axios.post(`http://localhost:3030/api/sign-in`, {username, pass}, {withCredentials: true});
    return response.data; 
};

const getAccount = async (id) => {
    const response = await axios.get(`http://localhost:3030/api/get-detail-user`, {withCredentials: true});
    return response.data; 
};

const logout = async () => {
    const response = await axios.post(`http://localhost:3030/api/log-out`, {withCredentials: true});
    return response.data; 
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, getAccount, logout };