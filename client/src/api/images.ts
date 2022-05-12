import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const searchImages = (search: string, page?: number) => axios.post(`${API_URL}/images`, { search, page })