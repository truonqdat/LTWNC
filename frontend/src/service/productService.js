import axios from 'axios'

const getListProduct = async (id) => {
    const response = await axios.get(`http://localhost:3030/api/get-list-product/${id}`);
    return response.data; 
};

const getDetailProduct = async (id) => {
    const response = await axios.get(`http://localhost:3030/api/get-detail-product/${id}`);
    return response.data; 
};

export default { getListProduct, getDetailProduct };