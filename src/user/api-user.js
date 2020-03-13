import {post} from 'axios'

const getUser = (username) =>{
    return fetch(`http://localhost:5555/api/user/${username}` ,{
        method: "GET",
    }).then(response => {
        return response.json()
    }).catch(error => {
        console.log (error);
    })
}

const uploadImageFile= (formData) =>{
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
   return post("http://localhost:5555/api/upload", formData, config).then(response =>{
        return response;
    }).catch(error =>{
        console.log(error);
    })
} 

const updateUser = (formData) =>{
    return post("http://localhost:5555/api/user/tranhieu1236", formData).then(response =>{
        return response
    }).catch(error =>{
        console.log(error)
    })
}

export {
    getUser,
    updateUser,
    uploadImageFile,
}