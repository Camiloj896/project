import PriceI from './../../../interfaces/PriceI';

import './Price.scss';

const Price: React.FC<PriceI> = ({ amount, title }) => {
    return (
        <div className="PriceComponent">
            <span className="PriceComponent__amount">{amount}</span>
            <strong>{title}</strong>
        </div>
    );
}

export default Price;
