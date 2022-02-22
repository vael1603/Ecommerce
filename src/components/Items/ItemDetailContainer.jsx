import { useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const params = useParams();

    var ItemInfo ={};

    if( params.id = 1) {
        ItemInfo = { title: 'BuzoNegro', price: '9799', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_794307-MLA47189161734_082021-W.jpg' };
    }

    if( params.id = 2) {
        ItemInfo = { title: 'Remera', price: '1299', pictureUrl: 'https://fabric.com.ar/wp-content/uploads/2017/11/REMERALISA.AZUL_-600x600.jpg'};
    }

    if( params.id = 3) {
        ItemInfo = { title: 'Pantalon', price: '7499', pictureUrl: 'https://pngimg.com/uploads/jeans/jeans_PNG5773.png'};
    }
    
    if( params.id = 4) {
        ItemInfo = { title: 'Zapatos', price: '5589', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_929716-MLA44136202542_112020-W.jpg'};
    }

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