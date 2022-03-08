import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemContext } from "../context/ItemProvider";
import {collection, getDocs} from "firebase/firestore";
import ItemList from "./ItemList";
import db from "../services/firebase";

const ItemListContainer = () => {

    const [itemsProduct, setItemsProduct] = useState([]);

    let {saveItemList} = useContext(ItemContext);

    const params = useParams();

    const filterCategory = (list) => {
        if( params.category != undefined) {
            setItemsProduct(
                list.filter((item) => item.category == params.category)
            );
        }
    }

    const getData = async () => {
        const data = collection(db, "Items");
        const col = await getDocs(data);
        const result = col.docs.map((doc) => doc = {id:doc.id,...doc.data()});
        setItemsProduct(result);
        setItemsProduct(result);
        saveItemList(result);
        filterCategory(result);
    }
/*
    useEffect(() => {
        get
        const itemCollection = db.collection.("items").get();

        console.log(itemCollection);
    }, []);*/

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="row text-start mt-3 container">
            <h2 className="col-12">Your Current items:</h2>
            <ItemList items={itemsProduct} />
        </div>)
};

export default ItemListContainer;