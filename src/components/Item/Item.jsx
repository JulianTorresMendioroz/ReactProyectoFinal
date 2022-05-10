import ItemCount from '../ItemCount/ItemCount';


export default function Item({title, description, price, pictureUrl, stock}) {

    return (
        <div>
            <img src={pictureUrl} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{`Descripción: ${description}`}</p>
                <p>{`Precio: $${price}`}</p>
                <p>{`Stock: ${stock}`}</p>
                <ItemCount initial={1} stock={5} onAdd={(cont)=>console.log(`${cont} Productos agregados`)}/>
            </div>
        </div>
    );
}