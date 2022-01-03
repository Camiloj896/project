import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useParams, useNavigate  } from "react-router-dom";
import Get from './../../context/actions/criptoCoins/Get';
import LoadingData from './../../components/loading-data/LoadingData';

import Price from '../../components/cripto-card/price/Price';
import Button from '../../components/button/Button';
import PercentageItem from '../../components/cripto-card/percentage-item/PercentageItem';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './CriptoInformation.scss' ;

import Card from 'react-bootstrap/Card';

const CriptoInformation = () => {

    const navigate = useNavigate();
    const params = useParams();

    const { criptoCoinState, criptoDispatch } = useContext(GlobalContext);

    const { data, loading, criptoCoin } = criptoCoinState;

    const handleHome = () => { navigate("/"); }

    useEffect(() => {
        if (data.length === 0) {
            navigate("/");
        } else {
            const id = params.id ? params.id : 0;
            Get(data, Number(id))(criptoDispatch);
        }        
    }, [criptoDispatch, data, params, navigate]);

    return (
        <section className='CriptoInformationPage'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={12} md={12} xs={12}>
                        { loading && <LoadingData /> }
                    </Col>
                    { !loading && <Col lg={8} md={8} xs={8}>
                        <Button title='Home' position='end' handleClick={handleHome} />
                    </Col>
                    }
                    { !loading && <Col lg={8} md={8} xs={12}>
                        <Card>                    
                            <Card.Body>
                                <Row>
                                    <Col lg={12} md={12} xs={12}>
                                        <div className='CriptoInformationPage__Coin'>
                                            <strong>{criptoCoin.name}</strong>
                                            <em>{criptoCoin.symbol}</em>
                                        </div>
                                        <div className='CriptoInformationPage__Rank'>
                                            <div>
                                                {criptoCoin.rank }                                            
                                            </div>
                                            <strong>Rank</strong>
                                        </div>
                                    </Col>

                                    <Col lg={12} md={12} xs={12}>
                                        <div className="CriptoInformationPage__title">Percentage Change</div>
                                        <Row>                                            
                                            <PercentageItem title={'1h'} value={criptoCoin.percent_change_1h}  />
                                            <PercentageItem title={'24h'} value={criptoCoin.percent_change_24h} />
                                            <PercentageItem title={'7d'} value={criptoCoin.percent_change_7d} />
                                            
                                        </Row>
                                    </Col>

                                    <Col lg={12} md={12} xs={12}>
                                        <div className="CriptoInformationPage__title">More information</div>
                                        <Row className='flex-wrap'>
                                            <PercentageItem title={'volume24'} value={criptoCoin.volume24 ? criptoCoin.volume24 : 0} />
                                            <PercentageItem title={'volume24a'} value={criptoCoin.volume24a ? criptoCoin.volume24a : 0} />
                                            <PercentageItem title={'csupply'} value={criptoCoin.csupply ? criptoCoin.csupply : 0} />
                                            <PercentageItem title={'tsupply'} value={criptoCoin.tsupply ? criptoCoin.tsupply : 0} />
                                            <PercentageItem title={'msupply'} value={criptoCoin.msupply ? criptoCoin.msupply : 0} />
                                        </Row>
                                    </Col>

                                    <Col lg={12} md={12} xs={12}>
                                        <Row className='flex-wrap'>
                                            <Col>
                                                <Price amount={criptoCoin.price_btc} title='Price' />
                                            </Col>
                                            <Col>
                                                <Price amount={criptoCoin.price_usd} title='Price USD' />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>}
                </Row>
            </Container>
        </section>
    );
}

export default CriptoInformation;

