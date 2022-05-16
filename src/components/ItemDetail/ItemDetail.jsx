
export default function ItemDetail({item}) {

    return (
        <div>
            <img src={item.pictureUrl} alt="imagenesBuzos" />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.id}</p>
                <p>{`Precio: $${item.price}`}</p> 
                <button onClick={addCart}></button>
            </div>
        </div>
    );
}