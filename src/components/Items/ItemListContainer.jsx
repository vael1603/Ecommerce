import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [itemsProduct, setItemsProduct] = useState([]);

    var products = [
        {title: 'Buzo', price: '9799', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_794307-MLA47189161734_082021-W.jpg'},
        {title: 'Remera', price: '1299', pictureUrl: 'https://fabric.com.ar/wp-content/uploads/2017/11/REMERALISA.AZUL_-600x600.jpg'},
        {title: 'Pantalon', price: '7499', pictureUrl: 'https://pngimg.com/uploads/jeans/jeans_PNG5773.png'},
        {title: 'Zapatos', price: '5589', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_929716-MLA44136202542_112020-W.jpg'},
      ];

    const getProducts = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(products);
        }, 2000);
    });

    getProducts.then((result) => {
        setItemsProduct(result);
    }).catch(err => {
        console.log(err);
    })

    return (
        <div className="row text-start mt-3 container">
            <h2 className="col-12">Your Current items:</h2>
            <ItemList items={itemsProduct} />
        </div>)
};

export default ItemListContainer;