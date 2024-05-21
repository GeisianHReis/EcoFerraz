import sgMail from '@sendgrid/mail';

const sendGridApiKey = ''; // ENVIRONEMNT VARIABLE
sgMail.setApiKey(sendGridApiKey);

export default sgMail;