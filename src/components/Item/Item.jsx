import { Link } from "react-router-dom";

export default function Item({el}) {

    return (
        <div>
            <img src={el.pictureUrl} alt="" />
            <div>
                <h3>{`Titulo: ${el.title}`}</h3>
                <p>{`Descripcion: ${el.description}`}</p>
                <p>{`Precio: $${el.price}`}</p>
                <p>{`Stock: ${el.stock}`}</p>
                <Link to={`/ItemDetail/${el.id}`}>
                <button>Detalle del producto</button>
            </Link>
            </div>
        </div>
    );
}
