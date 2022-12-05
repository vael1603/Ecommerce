import { Link } from "react-router-dom";

const Item = (props) => {
    return <>
        <div className="card bg-light m-2" style={{width: '18rem'}}>
            <div className="card-header bg-light mb-3">
            <h5 className="card-title">{props.product.title}</h5>
            </div>
            <img className="card-img-top" src={props.product.pictureUrl} alt="Card cap"/>
            <div className="card-body">
                <h4 className="card-title">${props.product.price}</h4>
                {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                <Link to={`/item/${props.product.id}`} className="btn btn-primary">Ver más</Link>
            </div>
        </div>
    </>
};

export default Item;