import { Container, Row } from 'reactstrap';
import SubHeader from "../components/SubHeader";

const AboutPage = () => {
    return (
        <Container>
            <Row>
                <SubHeader current='About Us' />
            </Row>
        </Container>
    );
};

export default AboutPage;