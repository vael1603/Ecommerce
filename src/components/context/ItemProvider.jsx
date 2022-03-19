import { createContext, useEffect, useState } from "react";
import db from "../services/firebase";
import {collection, getDocs} from "firebase/firestore";

export const ItemContext = createContext();

const ItemProvider = ({children}) => {
    
    const [items, setItems] = useState();

    const saveItemList = (list) => {
        setItems(list);
    }

    const getData = async () => {
        const data = collection(db, "Items");
        const col = await getDocs(data);
        const result = col.docs.map((doc) => doc = {id:doc.id,...doc.data()});
        setItems(result);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <ItemContext.Provider value={{items, saveItemList}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider;