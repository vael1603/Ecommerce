import { addDoc, collection, getDocs } from '@firebase/firestore';
import { useState } from 'react';
import db from '../services/firebase';

const useFireStore = () => {

    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(false);

    const getData = async () => {
        setLoad(true);
        const data = collection(db, "Items");
        const col = await getDocs(data);
        const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
        setItems(result);
        setLoad(false);
    }

    const generateOrder = async ({ datos }) => {
        setLoad(true);
        const col = collection(db, "orders");
        const order = await addDoc(col, datos)
        setLoad(false)
        alert("Gracias Por su compra ticket:" + order.id)

    }

    return {
        getData,
        items,
        generateOrder,
        load
    }
}

export default useFireStore
