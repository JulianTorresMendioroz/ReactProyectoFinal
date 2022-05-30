import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';

export default function ItemListContainer() {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'items');
        if (!id) {
            getDocs(queryCollection)
            .then(resp => setItems(resp.docs.map(el => ({id: el.id, ...el.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        } else {
            const queryCollectionFilter = query(queryCollection, where('category','==',id));
            getDocs(queryCollectionFilter)
            .then(resp => setItems(resp.docs.map(el => ({id: el.id, ...el.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        }
    },[id]);

    
    return (
        <div>
            {loader? <h2>Simulando retardo en la red...</h2>: <ItemList items={items} id={id} />}
        </div>
    );
}