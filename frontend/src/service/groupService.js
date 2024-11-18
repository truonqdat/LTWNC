import axios from 'axios'

const getAllGroup = async () => {
    const response = await axios.get("http://localhost:3030/api/get-all-groups");
    return response.data; 
};

export default { getAllGroup };