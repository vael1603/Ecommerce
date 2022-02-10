import Item from "./Item";

const ItemList = (props) => {
    return <>
    <div className="row ">
        {props.items.map(item => <Item product={item}/> )}
    </div>
    </>
};

export default ItemList;