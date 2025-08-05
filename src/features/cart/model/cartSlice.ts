import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, Product } from '../../../types';
import type {RootState} from '../../../app/store/store';

interface CartState {
    items: CartItem[];
    isOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isOpen: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
            const { product, quantity } = action.payload;
            const existingItem = state.items.find((item: CartItem) => item.product.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ product, quantity });
            }
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.product.id !== action.payload);
        },

        updateQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
            const { productId, quantity } = action.payload;

            if (quantity <= 0) {
                state.items = state.items.filter(item => item.product.id !== productId);
                return;
            }

            const item = state.items.find(item => item.product.id === productId);
            if (item) {
                item.quantity = quantity;
            }
        },

        clearCart: (state) => {
            state.items = [];
        },

        openCart: (state) => {
            state.isOpen = true;
        },

        closeCart: (state) => {
            state.isOpen = false;
        },

        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, openCart, closeCart, toggleCart } = cartSlice.actions;

// Исправленные селекторы с безопасной проверкой
export const selectCartItems = (state: RootState) => state.cart?.items || [];
export const selectCartIsOpen = (state: RootState) => state.cart?.isOpen || false;
export const selectTotalItems = (state: RootState) =>
    state.cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
export const selectTotalPrice = (state: RootState) =>
    state.cart?.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0) || 0;
// импорт по умолчанию  означает, что мы экспортируем только один элемент из этого файла
// в данном случае это cartSlice.reducer, который является функцией редьюсера, что
//  позволяет Redux Toolkit автоматически генерировать экшены и селекторы для работы с корзиной и подключать его к store
// др. словами-> это позволяет нам использовать cartSlice.reducer в store, чтобы Redux Toolkit знал,
// как обрабатывать экшены, связанные с корзиной и автоматически генерировать экшены и селекторы для работы с корзиной
export default cartSlice.reducer;