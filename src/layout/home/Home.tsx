import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import GetAll from './../../context/actions/criptoCoins/GetAll';
import CriptoCard from './../../components/cripto-card/card/CriptoCard';
import FilterContainer from './../../components/filter/FilterContainer';
import Button from './../../components/button/Button';
import LoadingData from './../../components/loading-data/LoadingData';
import ResetData from './../../context/actions/criptoCoins/ResetData';
import ResetFilters from './../../context/actions/filter/ResetFilters';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.module.scss';

const Home = () => {

    const { criptoCoinState, criptoDispatch, filterDispatch } = useContext(GlobalContext);

    const { data, loading, filter, filterData } = criptoCoinState;

    useEffect(() => {
        if (data.length === 0) {
            GetAll()(criptoDispatch);
        }
    }, [criptoDispatch, data]);
    
    const handleReset = () => {
        ResetData()(criptoDispatch);
        ResetFilters()(filterDispatch);
    }

    return (
        <section className='HomePage'>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <Row className='justify-content-end'>
                            <Col lg={1} md={2} xs={6}>
                                { filter && <Button 
                                    title={'Reset'}
                                    position='end'
                                    handleClick={handleReset}
                                />
                                }
                            </Col>
                            <Col lg={1} md={2} xs={6}>
                                <Button 
                                    title={'Filters'}
                                    ChildComponent={FilterContainer}
                                    offcanvas={true}
                                    position='end'
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12} md={12} xs={12}>
                        { loading && <LoadingData /> }
                    </Col>
                    { !filter && data.map(coin => (
                        <CriptoCard data={coin} key={coin.id} />
                    ))}
                    { filter && filterData.map(coin => (
                        <CriptoCard data={coin} key={coin.id} />
                    ))}
                </Row>            
            </Container>
        </section>
    );
}

export default Home;
