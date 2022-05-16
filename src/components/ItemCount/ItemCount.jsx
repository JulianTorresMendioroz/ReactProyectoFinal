import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../ItemCount/ItemCount.css'
import '../ItemDetail/ItemDetail'
import '../Item/Item'
import '../ItemList/ItemList'

const ItemCount = ({ initial, stock, onAdd, id }) => {

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
    onAdd(cont)
    
  }

  return (
    
        <div className="divPrincipalItemCount">
          <div>
            <h2>{cont}</h2>
            <button onClick={count}>+</button>
            <button onClick={addCart} >Agregar al carrito</button>
            <button onClick={discount} disabled={cont == 1} >-</button>
            <Link to={`/ItemDetail/${id}`}>
                <button onClick={addCart}></button>
            </Link>
          </div>
        </div>
      
  );
};

export default ItemCount;