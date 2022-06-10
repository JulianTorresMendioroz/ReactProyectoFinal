import Item from "../Item/Item";

export default function ItemList({items}) {

    return (
        <div>
         {items.map((el) => <Item key={el.id} el={el}/>)}
        </div>
    );
}