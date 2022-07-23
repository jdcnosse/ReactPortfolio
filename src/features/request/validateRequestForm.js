export const validateRequestForm = (values) => {
    const errors = {};

    //firstName validation
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    //lastName validation
    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    //phoneNum validaiton
    const reg = /^\d+$/; //regular expression to check that the input is only numbers.
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.'
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain an @';
    }

    return errors;
}