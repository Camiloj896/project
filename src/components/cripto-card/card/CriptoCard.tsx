import CriptoCardI from './../../../interfaces/CriptoCardI';
import { useNavigate  } from "react-router-dom";
import PercentageItem from './../percentage-item/PercentageItem';
import Price from './../price/Price'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './CriptoCard.scss';

const CriptoCard: React.FC<{data: CriptoCardI}> = (props) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/cripto-information/${props.data.id}`);
    }

    return (
        <Col lg={3} md={6} xs={12}>
            <Card className="CriptoCard" onClick={handleClick}>
                <Card.Body>
                    <Row>
                        <Col lg={12} md={12} xs={12}>
                            <strong>{props.data.name}</strong>
                            <em>{props.data.symbol}</em>
                        </Col>
                        <Col lg={12} md={12} xs={12}>
                            <div className="CriptoCard__percen-change">Percentage Change</div>
                            <Row>
                                <PercentageItem title={'1h'} value={props.data.percent_change_1h}  />
                                <PercentageItem title={'24h'} value={props.data.percent_change_24h} />
                                <PercentageItem title={'7d'} value={props.data.percent_change_7d} />
                            </Row>   
                        </Col>
                        <Col lg={6} md={6} xs={6} role='ComponentPrice'>
                            <Price amount={props.data.price_btc} title='Price' />
                        </Col>
                        <Col lg={6} md={6} xs={6} role='ComponentPrice'>
                            <Price amount={props.data.price_usd} title='Price USD' />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CriptoCard;