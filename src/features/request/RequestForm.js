import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateRequestForm } from './validateRequestForm';

const RequestForm = () => {

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                requestText: ''
            }}
            onSubmit={handleSubmit}
            validate={validateRequestForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2' className='bg-white'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field 
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                        />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-warning'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2' className='bg-white'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field 
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                        />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-warning'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2' className='bg-white'>
                        Phone
                    </Label>
                    <Col md='10'>
                        <Field 
                            name='phoneNum'
                            placeholder='xxx-xxx-xxxx'
                            className='form-control'
                            type='tel'
                        />
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-warning'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2' className='bg-white'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field 
                            name='email'
                            placeholder='Email'
                            className='form-control'
                            type='email'
                        />
                    </Col>
                    <ErrorMessage name='email'>
                            {(msg) => <p className='text-warning'>{msg}</p>}
                        </ErrorMessage>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='requestText' md='2' className='bg-white'>
                        Series &amp; issue #
                    </Label>
                    <Col md='10'>
                        <Field 
                            name='requestText'
                            as='textarea'
                            rows='12'
                            className='form-control'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' color='secondary'>
                            Send Request
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );

};

export default RequestForm;