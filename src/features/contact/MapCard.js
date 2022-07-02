import { Card, CardTitle, CardBody } from 'reactstrap';

const MapCard = () => {
    return (
        <Card>
            <CardTitle>
                <h5>Map Location</h5>
            </CardTitle>
            <CardBody>
                <iframe title="Google Maps of Phoenix" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425342.1915347331!2d-112.40523640448657!3d33.60567105480613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1654296322660!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </CardBody>
        </Card>
    );
};

export default MapCard;