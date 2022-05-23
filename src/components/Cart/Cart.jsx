import { UseCartContext } from "../../Context/CartContext";



export default function Cart() {
    const {cartList, clearCart} = UseCartContext();
    
    return (
        <div>
            <h1>Su pedido del producto:</h1>
            {cartList.map(el => <li>Buzo: {el.description} - Cantidad de unidades: {el.cont}</li>)}
            <button onClick={clearCart}>Vaciar carrito</button>
           
        </div>
    );
}