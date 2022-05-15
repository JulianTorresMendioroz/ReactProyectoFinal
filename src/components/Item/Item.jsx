import ItemCount from "./components/ItemCount/ItemCount";


export default function Item({el}) {

    return (
        <div className="item">
            <img src={el.pictureUrl} alt="imagenesBuzos" />
            <div></div>
            <div>
                <p>{el.description}</p>
                <h3>{el.title}</h3>
                <p>{`Precio: $${el.price}`}</p>
                <ItemCount id={el.id} initial={1} stock={stock} onAdd={(cont)=>console.log(`${cont} Productos agregados`)}/>
            </div>
        </div>
    );
}
