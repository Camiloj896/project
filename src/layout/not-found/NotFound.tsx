import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NotFound = () => {

    return (
        <section className='NotFoundPage'>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <div className='d-flex justify-content-center'>
                            <h1>Not Found</h1>
                        </div>
                    </Col>
                </Row>            
            </Container>
        </section>
    );
}

export default NotFound;
