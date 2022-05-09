import ItemCount from '../ItemCount/ItemCount';


export default function Item({title, description, price, imgUrl, stock}) {

    

    return (
        <div>
            <img src={"https://static.dafiti.com.ar/p/aloud-0751-566909-1-product.jpg"} alt="" />
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