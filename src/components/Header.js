import { Container, Row, Col } from 'reactstrap';
import phxLogoShadow from '../app/assets/img/phxLogoShadow.png';

const Header = () => {
    return (
            <Container>
                <Row>
                    <Col xs='4' sm='3' md='2' className='align-self-center'>
                        <img src={phxLogoShadow} className='img-fluid' alt='Company Logo' />
                    </Col>
                    <Col className='text-center align self-center'>
                        <h1>Welcome to Phynix Comics!</h1>
                    </Col>
                </Row>
            </Container>
    );
};

export default Header;