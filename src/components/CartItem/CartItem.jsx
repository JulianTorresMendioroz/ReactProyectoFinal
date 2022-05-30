import { UseCartContext } from "../../Context/CartContext";


export default function CartItem({item}) {
    const {clearItem} = UseCartContext();

    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <li>Item: {item.title} - {item.description} - Precio: ${item.price} - Cantidad: {item.cont} - <h2 onClick={removeItem}>X</h2></li>
    );
}

