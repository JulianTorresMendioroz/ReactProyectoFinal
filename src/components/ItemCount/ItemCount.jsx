import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [cont, setCont] = useState(initial);

  function count() {
    if (cont < stock) {
      setCont(cont + 1);
    } else {
      alert("¡No hay STOCK!");
    }
  }

  function addCart(){
    if (onAdd = setCont)
    alert(cont + " " + "Productos han sido agregados al carrito")
    
  }

  return (
    
    
        <div>
          <h1>Productos agregados al carrito:</h1>
          <div>
            <h2>{cont}</h2>
            <button onClick={count}>+</button>
            <button onClick={addCart} >Agregar al carrito</button>
            <button onClick={()=> setCont(cont -1)} disabled={cont=== 1}>-</button>
            
          </div>
        </div>
      
  );
};

export default ItemCount;