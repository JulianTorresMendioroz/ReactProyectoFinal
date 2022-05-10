import { useState, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const productos = [

  { id: '1', title: 'buzo', description: 'Buzo Negro', price: '3500', pictureUrl: "https://static.dafiti.com.ar/p/aloud-0751-566909-1-product.jpg", stock:5},
  
  { id: '2', title: 'buzo', description: 'Buzo Blanco', price: '4000', pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_900933-MLA45795207902_052021-W.jpg", stock:8},
  
  { id: '3', title: 'buzo', description: 'Buzo Rojo', price: '6000', pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_776748-MLA43700792935_102020-W.jpg", stock:2},
  
  { id: '4', title: 'buzo', description: 'Buzo Azul', price: '5500', pictureUrl: "https://www.remerasya.com/pub/media/catalog/product/cache/ffdc873e1c2bb920f5c9f401e1017da8/b/u/buzo_azul_francia_liso_1.jpg", stock:4},
  
  { id: '5', title: 'buzo', description: 'Buzo Amarillo', price: '6200', pictureUrl: "https://i.pinimg.com/736x/e7/69/7b/e7697bc61555ae06cd6f254270da674d--yellow-shirts-yellow-sweatshirt.jpg", stock:2},
  
  { id: '6', title: 'buzo', description: 'Buzo Verde', price: '5500', pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_843237-MLA46419154408_062021-O.jpg", stock:6}
  
];

const data = new Promise((resolve)=>{
  setTimeout(()=>{
  resolve( productos )
}, 2000)
})

const ItemListContainer = ({ greeting="¡Hola soy un saludo efímero!" }) => {
 
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState([true]);

  useEffect(() =>  { 
    data
      .then(resp => setItems(resp))
      .catch((err)=>console.log(err))
      .finally(() => setLoader(false))
   },[]);
  
  return (

    <div>
      <ItemCount initial={1} stock={5} onAdd />
      {loader? <h2>Cargando...</h2>: <ItemList items={items} />} 
    </div>
  )
  }

export default ItemListContainer