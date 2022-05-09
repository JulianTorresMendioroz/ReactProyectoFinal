import Item from '../Item/Item'

export default function ItemList({items}) {

    return (
        <div>
            {items.map(el => <Item key={el.id} titulo={el.title} descripcion={el.description} price={el.price} img={el.imgUrl} stock={el.stock} />)}
        </div>
    );
}

 