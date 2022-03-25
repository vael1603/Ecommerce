import Item from "./Item";

const ItemList = (props) => {
    return <>
    <div className="row ">
        {props.items.map(item => <Item key={item.id} product={item}/> )}
    </div>
    </>
};

export default ItemList;