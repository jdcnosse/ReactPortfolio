import { Container, Row } from 'reactstrap';
import SubHeader from "../components/SubHeader";

const ContactPage = () => {
    return (
        <Container>
            <Row>
                <SubHeader current='Contact Us' />
            </Row>
        </Container>
    );
};

export default ContactPage;