import { Link } from "react-router-dom";

export default function Item({el}) {

    return (
        <div>
            <img src={el.pictureUrl} alt="" />
            <div></div>
            <div>
                <p>{el.title}</p>
                <h3>{el.description}</h3>
                <p>{`Precio: $${el.price}`}</p>
                <p>{`Stock: ${el.stock}`}</p>
                <Link to={`/itemDetail/${el.id}`}>
                    <button>Ir al Detalle del producto</button>
                </Link>
            </div>
        </div>
    );
}