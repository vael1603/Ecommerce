import { createContext, useEffect } from "react";
import useFireStore from "../hooks/useFireStore";

export const ItemContext = createContext();

const ItemProvider = ({children}) => {
    
    const {items, getData, load} = useFireStore();

    const saveItemList = (list) => {
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <ItemContext.Provider value={{items, saveItemList, load}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider;