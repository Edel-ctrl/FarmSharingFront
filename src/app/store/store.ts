import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../../features/cart/model/cartSlice";


// 🛒 Импортирую cartSlice и передаю его .reducer (функцию)в configureStore - это
// правильный способ подключения редьюсера в Redux Toolkit.
// Это позволяет Redux Toolkit автоматически генерировать экшены и селекторы для работы с корзиной.
export const store = configureStore({
  reducer: {
    // 🛒 Передаю редьюсер корзины в store(используем именно reducer по умолчанию)
    cart: cartReducer, // 🛒 Редьюсер для корзины (передаем cartSlice.reducer), т.е.
    // передам функцию редьюсера, а не весь слайс
    // другие редьюсеры...
  },
});

// Определяю типы (RootState и AppDispatch) для использования в приложении для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;