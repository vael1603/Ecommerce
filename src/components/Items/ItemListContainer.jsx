import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../context/ItemProvider";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [itemsProduct, setItemsProduct] = useState([]);

    let {saveItemList} = useContext(ItemContext);

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            fetch("https://mocki.io/v1/20c4d929-28de-4b2e-a7b4-901407622933")
            .then((res) => {
                resolve(res.json());
            });
        });

        getProducts.then((result) => {
            setItemsProduct(result);
            saveItemList(result);
        }).catch(err => {
            console.log(err);
        })
    
    }, []);


    return (
        <div className="row text-start mt-3 container">
            <h2 className="col-12">Your Current items:</h2>
            <ItemList items={itemsProduct} />
        </div>)
};

export default ItemListContainer;