import { Container, Row, Col } from 'reactstrap';
import SubHeader from "../components/SubHeader";
import HoursCard from '../features/contact/HoursCard';
import LocationCard from '../features/contact/LocationCard';
import MapCard from '../features/contact/MapCard';

const ContactPage = () => {
    return (
        <Container>
            <Row>
                <SubHeader current='Contact Us' />
            </Row>
            <Row>
                <Col lg='6' className='mx-auto'>
                    <LocationCard />
                    <HoursCard />
                    <MapCard />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;