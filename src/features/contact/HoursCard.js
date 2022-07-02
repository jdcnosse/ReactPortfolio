import { Table, Card, CardTitle, CardBody } from 'reactstrap';

const HoursCard = () => {
    return (
        <Card>
            <CardTitle>
                <h5>Hours of Operation</h5>
            </CardTitle>
            <CardBody>
                <Table striped>
                        <thead>
                    <th>Day</th>
                    <th>Hours</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>11:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>11:00 AM - 7:00 PM</td>
                    </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default HoursCard;