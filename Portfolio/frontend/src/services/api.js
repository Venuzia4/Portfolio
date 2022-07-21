
import axios from "axios";


const API_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080/api";



export const sendMessage = async (data) => {
    return (await axios.post(`${API_URL}/messages`, data)).data;
  };
