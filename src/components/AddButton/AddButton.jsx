import { Link } from "react-router-dom";


export default function AddButton() {
    
    return (
        <div>
            <Link to='/cart'>
                <button >Ver productos</button>
            </Link>
            <Link to='/'>
                <button >Ir al Home</button>
            </Link>
        </div>
    );

}