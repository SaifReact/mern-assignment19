import axios from 'axios';


export const APIData = (endPoint) => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:5555/' + endPoint)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            })
    });
};