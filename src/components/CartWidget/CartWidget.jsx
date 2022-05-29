import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";


export default function CartWidget() {
    const {totalItems} = UseCartContext();

    return (
        <Link to='/cart' >
           <img src="https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-2.jpg" className='CartWidgetIcon' alt="CartIcon" />
                <span><i></i></span>
                <span>{totalItems}</span>
        </Link>
    );
}
