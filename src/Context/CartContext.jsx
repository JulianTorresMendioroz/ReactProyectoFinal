import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);

    function addToCart(item) {
        setCartList([
            ...cartList, item]);
    }
    function clearCart() {
        setCartList([]);
    }
    /* function clearItem(id) {
        Me falta desarollar ésta funcion, seguro lo haga con un If o veré luego
    } */

    return (
        <cartContext.Provider value={{
            ...cartList,
            addToCart,
            clearCart
        }}>
            {children}
        </cartContext.Provider>
    );
}
