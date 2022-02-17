import { useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    var ItemInfo =
        { title: 'BuzoNegro', price: '9799', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_794307-MLA47189161734_082021-W.jpg' }
        ;

    const getItem = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(ItemInfo);
        }, 2000);
    });

    getItem.then((result) => {
        setItem(result);
    }).catch(err => {
        console.log(err);
    })

    return <>
        <ItemDetail details={item}/>
    </>
}

export default ItemDetailContainer;