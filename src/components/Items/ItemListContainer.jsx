import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemContext } from "../context/ItemProvider";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    let {items} = useContext(ItemContext);

    const [itemsProduct, setItemsProduct] = useState();

    const params = useParams();

    const filterCategory = (pathVariable) => {
        if( pathVariable.category != undefined) {
            setItemsProduct(
                items.filter((item) => item.category == pathVariable.category)
            );
        }
    }

    useEffect(() => {
        setItemsProduct(items)
        filterCategory(params);
    }, [params, items]);


    return (
        <div className="row text-start mt-3 container">
            <h2 className="col-12">Your Current items:</h2>
            { itemsProduct != undefined && <ItemList items={itemsProduct} /> }
        </div>)
};

export default ItemListContainer;