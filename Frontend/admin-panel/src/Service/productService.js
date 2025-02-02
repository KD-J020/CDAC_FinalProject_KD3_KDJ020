import axios from 'axios';
import {createUrl} from '../utils';

export const getProducts = async () => {
    try {
        const url = createUrl('product/active');
        const response = await axios.get(url);
        return response.data;
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}

export const deleteProduct = async (id) => {
    try {
      
        const url = createUrl(`product/${id}`);
        const response = await axios.patch(url);
        return response.data;
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}

export const addProduct = async (title,
    cid,
    description,
    price,
    image) => {
    try {
        const body = { title,cid, description,price, image };
        const url = createUrl('product');
        const response = await axios.post(url, body);
        return response.data;
    } catch (ex) {
        return { status: 'error', error: ex }
    }
}