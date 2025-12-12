import { useState, useEffect } from "react";
import axios from "axios";

export const API_URL = `http://localhost:5000/api`

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true
})


$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("key")}`
    return config
})

$api.interceptors.response.use((config) => {
    return config;

}, async(error) => {
    const originalRequest = error.config
    if(error.response.status === 401) {
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
        localStorage.setItem("key", response.data.accessToken)
        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
        return $api.request(originalRequest)
        } catch (error) {
            console.log("Не авторизован");
        }
        
    }
})

export default $api