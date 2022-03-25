import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
    return (
        <div>
            <Spinner animation="border" className="mt-5" style={{width: '3rem', height: '3rem'}} role="status"/>
            <span className="d-block">Cargando...</span>
        </div>)
}

export default Loader;