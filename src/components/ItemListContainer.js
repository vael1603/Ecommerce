const ItemListContainer = (props) => {
    return (
        <div className="text-start mt-3 container">
            <h2>Your Current items:</h2>
            <ul>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
                <li>{props.item3}</li>
            </ul>
        </div>)
};

export default ItemListContainer;