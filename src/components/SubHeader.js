import { Container, Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({current}) => {
    return (
        <Container>
            <Row>
                <Col className='bg-white rounded' xs='12'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {current}
                    </BreadcrumbItem>
                </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                <h2>{current}</h2>
                <hr />
                </Col>
            </Row>
        </Container>
    );
};

export default SubHeader;