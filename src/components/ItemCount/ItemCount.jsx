import React, { useState } from "react";
import '../ItemCount/ItemCount.css'
import '../ItemDetail/ItemDetail'
import '../Item/Item'
import '../ItemList/ItemList'

const ItemCount = ({ initial, stock, onAdd}) => {

  const [cont, setCont] = useState(initial);

  function count() {
    if (cont < stock) {
      setCont(cont + 1);
    } else {
      alert("¡No hay STOCK!");
    }
  }

  function discount() { 

   setCont (cont - 1)
  }

  function addCart()  {
   onAdd(cont);
   
  }

  return (
    
        <div>
          <div>
            <h2>{cont}</h2>
            <button onClick={discount} disabled={cont === 1} >-</button>
            <button onClick={addCart} >Agregar al carrito</button>
            <button onClick={count}>+</button>
          </div>
        </div>
      
  );
};

export default ItemCount;