import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({ greeting="¡Hola soy un saludo efímero!" }) => {
  return (

    <div>
      
      {greeting} 
      <ItemCount initial={1} stock={5} onAdd />
       </div>
  )
}

export default ItemListContainer