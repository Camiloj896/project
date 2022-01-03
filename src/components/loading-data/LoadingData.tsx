import Spinner from 'react-bootstrap/Spinner';
import './LoadingData.scss';

const LoadingData = () => {

    return (
        <div className="loadingComponent">
            <Spinner animation="border" variant='info' />
            <strong>Loading Data</strong>
        </div>
    )
}

export default LoadingData;