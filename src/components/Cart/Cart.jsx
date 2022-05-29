import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";
import CartItem from "../../components/CartItem/CartItem";


export default function Cart() {
    const {cartList, clearCart, totalPrice, totalItems} = UseCartContext();
    
    if (!totalItems) {
        return (
            <div>
                <h1>No hay productos</h1>
                <Link to='/'>
                    <button>Volver al menú</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Su pedido del producto:</h1>
            {cartList.map(el => <CartItem key={el.id} item={el}/>)}
            <p>{`Precio final: $${totalPrice}`}</p>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
}
