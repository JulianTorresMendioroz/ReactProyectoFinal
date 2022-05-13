import ItemCount from '../ItemCount/ItemCount';



export default function Item({title, description, price, pictureUrl, stock, initial}) {

    return (
        <div>
            <img src={pictureUrl} alt="imagenesBuzos" />
            <div>
                <h3>{title}</h3>
                <p>{`Descripción: ${description}`}</p>
                <p>{`Precio: $${price}`}</p>
                <p>{`Stock: ${stock}`}</p>
                <ItemCount initial={initial} stock={stock} onAdd={(cont)=>console.log(`${cont} Productos agregados`)}/>
            </div>
        </div>
    );
}

