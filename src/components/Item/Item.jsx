import { Link } from "react-router-dom";

export default function Item({el}) {

    return (
        <div>
            <img src={el.pictureUrl} alt="" />
            <div></div>
            <div>
             <Link to={`/itemDetail/${el.id}`}>
                    <button>Ir al Detalle del producto</button>
                </Link>
            </div>
        </div>
    );
}