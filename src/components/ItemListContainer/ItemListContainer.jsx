import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({ greeting="¡Hola soy un saludo efímero!" }) => {
  return (

    <div>
      
      {greeting} 
      <ItemCount initial={0} stock={5} onAdd />
       </div>
  )
}

export default ItemListContainer