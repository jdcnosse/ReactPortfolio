import { Container, Row, Col } from 'reactstrap';
import phxLogoShadow from '../app/assets/img/phxLogoShadow.png';

const Header = () => {
    return (
            <Container className='container-fluid bgHeader'>
                <Row>
                    <Col className='align-self-center'>
                        <img src={phxLogoShadow} alt='Company Logo' />
                    </Col>
                    <Col className='text-center align-self-center'>
                        <h1>Welcome to Phynix Comics!</h1>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
    );
};

export default Header;