import { Card, CardTitle, CardBody } from 'reactstrap';

const LocationCard = () => {
    return (
        <Card>
            <CardTitle>
                <h3>Where we're located</h3>
            </CardTitle>
            <CardBody>
                <p>
                    You can find us in downtown Phoenix, on the corner of Central &amp; Washington.
                </p>
                <p>
                    Call us: &nbsp;&nbsp;&nbsp;<a class="text-danger" href="tel:+12345678910"><i class="fa fa-phone">1-234-567-8910</i></a><br />
                    Email us: <a class="text-danger" href="mailto:contactus@phynixcomics.com"><i class="fa fa-envelope"></i>contactus@phynixcomics.com</a>
                </p>
            </CardBody>
        </Card>
    );
};

export default LocationCard;