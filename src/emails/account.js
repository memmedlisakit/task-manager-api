const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'msakit.p401@code.edu.az',
        subject: 'Thanks for joining us!',
        text: `Welcome to our website ${name}. Get enjoy to use.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'msakit.p401@code.edu.az',
        subject: 'Cancelation email',
        text: `Dear ${name} why exit our system?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}