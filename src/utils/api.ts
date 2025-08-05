// src/utils/api.ts
import axios from 'axios';
// 🛠️ Функция для получения продуктов с сервера
// Используем axios для HTTP-запросов
// В будущем можно заменить на fetch или другую библиотеку
// Если используете fetch, то нужно будет настроить обработку ошибок и преобразование данных
// Также можно добавить базовый URL для axios, если у вас есть API сервер
// Например: axios.defaults.baseURL = 'https://api.example.com';
export const fetchProducts = async () => {
    const response = await axios.get('/api/products');
    return response.data;
};


