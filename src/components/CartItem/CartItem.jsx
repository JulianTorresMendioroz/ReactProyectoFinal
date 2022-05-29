import { UseCartContext } from "../../Context/CartContext";


export default function CartItem({item}) {
    const {clearItem} = UseCartContext();

    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <li>Item: {item.title} - {item.description} - Precio: ${item.price} - Cantidad: {item.cont} - <span onClick={removeItem}><i></i></span></li>
    );
}

