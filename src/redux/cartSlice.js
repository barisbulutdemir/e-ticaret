import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(localStorage.getItem("cart"));
    } else {
        return [];
    }
};

const storeInLocalStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemCart = state.carts.find(
                (item) => item.id === action.payload.id
            );

            if (isItemCart) {
                const tempCart = state.carts.map((item) => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty * item.price;

                        return {
                            ...item,
                            quantity: tempQty,
                            totalPrice: tempTotalPrice,
                        };
                    } else {
                        return item;
                    }
                });
                state.carts = tempCart;
                storeInLocalStorage(state.carts);
            } else {
                state.carts.push(action.payload);
                storeInLocalStorage(state.carts);
            }
            state.itemCount += 1;
            state.totalAmount += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const removedItem = state.carts.find((item) => item.id === action.payload);
            const tempCart = state.carts.filter((item) => item.id !== action.payload);
            state.carts = tempCart;
            storeInLocalStorage(state.carts);
            state.itemCount -= removedItem.quantity;
            state.totalAmount -= removedItem.totalPrice;
        },
        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts);
            state.itemCount = 0;
            state.totalAmount = 0;
        },
        getCartTotal: (state) => {
            console.log('state in getCartTotal reducer:', state);
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                console.log('cartTotal:', cartTotal, 'cartItem.price:', cartItem.price);
                return cartTotal += cartItem.price;
            }, 0 );
            console.log('totalAmount:', state.totalAmount);
            state.itemCount = state.carts.length;
            console.log('itemCount:', state.itemCount);
        }
    },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
    cartSlice.actions;
export default cartSlice.reducer;
