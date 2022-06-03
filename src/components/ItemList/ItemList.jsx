import Item from "../Item/Item";

export default function ItemList({items, id}) {

    return (
        <div>
            {id? 
                items.filter(el => el.category === id).map((el) => <Item key={el.id} el={el}/>)
                    :items.map((el) => <Item key={el.id} el={el}/>)
            }
        </div>
    );
}