import { Container, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';

const RequestPage = () => {
    return (
        <Container>
            <Row>
                <SubHeader current='Request an Issue' />
            </Row>
        </Container>
    );
};

export default RequestPage;