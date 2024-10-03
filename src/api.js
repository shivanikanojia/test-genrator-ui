import axios from "axios"


const API = axios.create({
    baseURL: "http://localhost:8080"
})
export const generateUnitTest = async(sourceCode) => {
    console.log(sourceCode);
    const response = await API.post('/convertors',{
        "srcCode": sourceCode
    });
    
    console.log(response);
    console.log(response.data);

    return response;
};


// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));