import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";
import { UseCartContext } from "../../Context/CartContext"
import AddButton from "../AddButton/AddButton"

export default function ItemDetail({item}) {
    const [inputType, setInputType] = useState('itemCount');
    const {addToCart} = UseCartContext();
    
    function onAdd(cont) {
        addToCart({...item, cont})
        setInputType('AddButton');
    }

    return (
        <div>
            <img src={item.pictureUrl} alt="imagenesBuzos" />
            <div>
            <p>{`Descripcion: ${item.description}`}</p>
                <p>{`Precio: $${item.price}`}</p>
                <p>{`Stock: ${item.stock}`}</p>
                {inputType === 'itemCount' ?
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>:
                <AddButton/>}
            </div>
           
        </div>
    );
}

