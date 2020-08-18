const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: 'carnyel9@gmail.com',
      subject: 'Thanks for joining in',
      text: `Welcome ${name}, Let me know how you get along with the app`,
    })
    .catch((e) => console.log(e.response.body.errors));
};

const sendCancelationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: 'carnyel9@gmail.com',
      subject: 'Sorry to see you go',
      text: `Goodbye ${name}, I hope to see you sometime soon`,
    })
    .catch((e) => console.log(e.response.body.errors));
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
