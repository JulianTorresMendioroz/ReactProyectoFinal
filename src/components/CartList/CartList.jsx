import { UseCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";


export default function CartList({createOrder}) {
    const {cartList, clearCart, totalPrice} = UseCartContext();

    return (
        <div>
            <h1>Sus productos:</h1>
            {cartList.map((el) => <CartItem key={el.id} item={el}/>)}
            <p>{`Costo total: $${totalPrice}`}</p>
            <button onClick={clearCart}>Vaciar carrito</button>
            <button onClick={createOrder}>Comprar ahora</button>
        </div>
    );
}