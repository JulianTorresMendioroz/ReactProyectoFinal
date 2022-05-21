import '../CartWidget/CartWidget.css'
import { Link} from "react-router-dom"

const CartWidget = () => {

  return (

    <>
    <Link to='/cart'>
        <img src="https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-2.jpg" className='CartWidgetIcon' alt="CartIcon" />
        <span><i></i></span>
                <span>0</span>
        </Link>
    </>
  )
}

export default CartWidget
