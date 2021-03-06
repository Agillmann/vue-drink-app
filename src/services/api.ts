import axios from 'axios';

export default() => {
    return axios.create({
        baseURL: `https://api-cocktail-bl.herokuapp.com`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
};
