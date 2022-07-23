import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import RequestForm from '../features/request/RequestForm';

const RequestPage = () => {
    return (
        <Container>
            <Row>
                <SubHeader current='Request an Issue' />
            </Row>
            <Row>
                <Col lg='6' className='mx-auto'>
                    <RequestForm />
                </Col>
            </Row>
        </Container>
    );
};

export default RequestPage;