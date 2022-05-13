import React, { useState } from "react";
import '../ItemCount/ItemCount.css'

const ItemCount = ({ initial, stock, onAdd }) => {

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

  function addCart() 
  {
    alert(cont + " " + "Productos han sido agregados al carrito") 
    
  }

  return (
    
        <div className="divPrincipalItemCount">
          <p>Productos agregados al carrito:</p>
          <div>
            <h2>{cont}</h2>
            <button onClick={count}>+</button>
            <button onClick={addCart} >Agregar al carrito</button>
            <button onClick={discount} disabled={cont === 1} >-</button>
            
          </div>
        </div>
      
  );
};

export default ItemCount;