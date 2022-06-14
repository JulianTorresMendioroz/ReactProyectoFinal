import { UseCartContext } from "../../Context/CartContext";


export default function CartItem({item}) {
    const {clearItem} = UseCartContext();

    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <li>-Item: {item.title} 
        - Precio: ${item.price}
        - Cantidad: {item.cont} 
        - <button onClick={removeItem}><i></i></button></li>
    );
}


// probando nuevo sist op 