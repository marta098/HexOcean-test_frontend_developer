import axios from "axios";

export const createRequest = (order) => {
    return axios.post(`https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/`, order, {
    }).then(response => response.data);
}
