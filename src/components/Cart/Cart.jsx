import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";
import CartList from "../CartList/CartList";

export default function Cart() {
  
    const {totalItems, orderId} = UseCartContext();

    if (!totalItems) {
        return (
            <div className="cart">
                <h1>No hay productos</h1>
                {orderId ? <h1>Pedido enviado! Nro de pedido: {orderId}</h1> : <h1>El pedido está vacío</h1>}
                <Link to='/'>
                    <button>Volver al home</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <CartList/>
        </div>
    );
}