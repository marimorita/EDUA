import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/edua-at/auth/',
})

const cloudinaryAxios = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/dcvknx7by' // URL base para Cloudinary
});

export { axiosInstance, cloudinaryAxios };