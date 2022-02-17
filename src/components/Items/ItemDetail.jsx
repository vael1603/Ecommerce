const ItemDetail = (props) => {

    return <>
        <div className="card bg-light p-5">
            <div className="row">
                <div className="col-7 p-5 m-3 card">
                    <img className="card-img-top" src={props.details.pictureUrl} alt="Producto" />
                </div>
                <div className="col-4 card m-3 bg-dark text-white p-5">
                    <h3>{props.details.title}</h3>
                    <h2>${props.details.price}</h2>
                </div>
            </div>
        </div>
    </>
}

export default ItemDetail;