
export default function ItemDetail({item}) {

    return (
        <div>
            <img src={item.pictureUrl} alt="imagenesBuzos" />
            <div>
            <p>{`Descripcion: ${item.description}`}</p>
                <p>{`Precio: $${item.price}`}</p>
                <p>{`Stock: ${item.stock}`}</p>
                <p>{`Precio: $${item.price}`}</p> 
                
            </div>
        </div>
    );
}