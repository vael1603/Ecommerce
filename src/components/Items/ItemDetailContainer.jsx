import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemContext } from "../context/ItemProvider";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {items} = useContext(ItemContext);

    const params = useParams();

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            resolve( items.find( product => { return product.id == params.id}));
        });

        getItem.then((result) => {
            setItem(result);
        }).catch(err => {
            console.log(err);
        })

    }, []);


    return <>
        <ItemDetail details={item} />
    </>
}

export default ItemDetailContainer;