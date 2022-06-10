import { createContext, useContext, useState } from "react";
import { addDoc, collection, getFirestore, where, query, documentId, writeBatch, getDocs } from "firebase/firestore";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [orderId, setOrderId] = useState();

    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }
    function addToCart(item) {
        if (isInCart(item.id)) {
            let i = cartList.findIndex(el => el.id === item.id);
            const newCartList = cartList;
            newCartList[i].cont += item.cont;
            updateCart(newCartList);
        } else {
            updateCart([...cartList,item]);
        }
    }
    function clearCart() {
        updateCart([]);
    }
    function clearItem(id) {
        let i = cartList.findIndex(el => el.id === id);
        const newCartList = cartList;
        newCartList.splice(i,1);
        updateCart(newCartList);
    }
    function updateCart(arr) {
        setCartList(arr);
        setTotalPrice(arr
            .map(curr => curr.cont*curr.price)
            .reduce((acc,curr) => acc+curr,0)
        );
        setTotalItems(arr
            .map(curr => curr.cont)
            .reduce((acc,curr) => acc+curr,0)
        );
    }

    function createOrder() {
        let order = {};

        order.buyer = {name: 'Julián', email: 'juliantorresmendiorz348@gmail.com', phone: '2284557289' };
        order.total = totalPrice;
        order.items = cartList.map(item => {
            const id = item.id;
            const title = item.title;
            const cont = item.cont;
            const newStock = item.stock-item.cont;
            const price = item.price*item.cont;
            return {id, title, cont, newStock, price,}
        });

        async function updateStocks() {
            const queryCollectionStocks = collection(db, 'items');
            const queryUpdateStocks = query(queryCollectionStocks, where(documentId(), 'in', cartList.map(item => item.id)));
            const batch = writeBatch(db);

            await getDocs(queryUpdateStocks)
            .then(resp => resp.docs.forEach(
                res => batch.update(res.ref, {stock: order.items.find(item => item.id === res.id).newStock})
            ))
            .catch(err => console.log(err))

            batch.commit()
        }

        const db = getFirestore();
        const queryCollectionOrders = collection(db, 'orders');
        addDoc(queryCollectionOrders, order)
        .then(resp => setOrderId(resp.id))
        .then(() => updateStocks())
        .catch(err => console.log(err))
        .finally(() => clearCart())
    };

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            orderId,
            clearItem,
            createOrder,
            totalPrice,
            totalItems
            
            
        }}>
            {children}
        </cartContext.Provider>
    );
}
