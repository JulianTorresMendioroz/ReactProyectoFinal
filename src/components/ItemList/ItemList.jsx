import Item from '../Item/Item'

export default function ItemList({items}) {

    return (
        <div>
            {items.map(el => <Item key={el.id} title={el.title} description={el.description} price={el.price} pictureUrl={el.pictureUrl} stock={el.stock} />)}
        </div>
    );
}

 