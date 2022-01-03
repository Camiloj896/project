import PercentageItemI from './../../../interfaces/PercentageItemI';
import Col from 'react-bootstrap/Col';

import './PercentageItem.scss';

const PercentageItem: React.FC<PercentageItemI> = (props) => {

    return (
        <Col className='PercentageItem' role='PercentageItem'>
            <div className='PercentageItem__value'>
                {props.value}
            </div>
            <div className='PercentageItem__title'>
                {props.title}
            </div>
        </Col>
    );
}

export default PercentageItem;