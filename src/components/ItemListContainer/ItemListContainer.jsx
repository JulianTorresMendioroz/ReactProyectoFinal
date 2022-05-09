import { useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"



const ItemListContainer = ({ greeting="¡Hola soy un saludo efímero!" }) => {
  


  const data = new Promise((resolve)=>{
    setTimeout(()=>{
    resolve( productos )
  }, 2000)
  })

  const [productos, setProductos] = useState()
  useEffect(() =>  { 
  data
  .then(resp => setProductos(resp))
  .catch((err)=>console.log(err))
   },)
  

  
  return (

    <div>
      
      {greeting} 
      <ItemCount initial={1} stock={5} onAdd />
       </div>
  )
}

export default ItemListContainer