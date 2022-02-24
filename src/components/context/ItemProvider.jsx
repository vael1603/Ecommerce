import { createContext, useState } from "react";

export const ItemContext = createContext();

const ItemProvider = ({children}) => {
    
    const [items, setItems] = useState();

    const saveItemList = (list) => {
        setItems(list);
    }
 
    return (
        <ItemContext.Provider value={{items, saveItemList}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider;