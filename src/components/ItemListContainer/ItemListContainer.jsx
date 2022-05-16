import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        fetch("/data/data.json")
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[]);

    return (
        <div>
            {loader? <h2>Simulando retardo en la red...</h2>: <ItemList items={items} id={id} />}
        </div>
    );
}