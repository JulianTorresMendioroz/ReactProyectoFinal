import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";
import CartList from "../CartList/CartList"
import { collection, getFirestore, addDoc } from "firebase/firestore";

export default function Cart() {
    const {totalItems, totalPrice, cartList, clearCart} = UseCartContext();


    function createOrder() {
        let order = {};
        
        order.buyer = {name: 'Julián', email: 'juliantorresmendioroz348@gmail.com', phone: '2284557289' };
        order.total = totalPrice;
        order.items = cartList.map(item => {
            const id = item.id;
            const name = item.name;
            const price = item.price*item.cont;
            return {id, name, price}
        });

        const db = getFirestore();
        const queryCollection = collection(db, 'orders');
        addDoc(queryCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => clearCart())
    };
    
    if (!totalItems) {
        return (
            <div className="cart">
                <h1>No hay productos</h1>
                <Link to='/'>
                    <button>Volver al home</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <CartList createOrder={createOrder}/>
        </div>
    );
}