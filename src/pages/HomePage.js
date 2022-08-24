import { Container, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ComicBookCarousel from '../features/carousel/ComicBookCarousel';

const HomePage = () => {
  return (
    <Container>
      <Row>
        <SubHeader />
      </Row>
      <Row>
        <ComicBookCarousel />
      </Row>
    </Container>
  );
};

export default HomePage;
