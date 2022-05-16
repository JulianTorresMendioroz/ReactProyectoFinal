import ItemCount from "../ItemCount/ItemCount";

export default function Item({el}) {

    return (
        <div className="item">
            <img src={el.pictureUrl} alt="" />
            <div>
                <h3>{`Titulo: ${el.title}`}</h3>
                <p>{`Descripcion: ${el.description}`}</p>
                <p>{`Precio: $${el.price}`}</p>
                <p>{`Stock: ${el.stock}`}</p>
                <ItemCount id={el.id} initial={1} stock={el.stock} onAdd={(cont)=>alert(`${cont} Productos agregados`)}/>
            </div>
        </div>
    );
}
