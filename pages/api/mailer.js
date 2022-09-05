export default async (req, res) => {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey('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')
  const msg = {
    to: 'amolina@totalhome.com.ar', // Change to your recipient
    from: 'amolina@totalhome.com.ar', // Change to your verified sender
    subject: 'Sending with SendGrid is Funnn',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      res.json({ message: `Email has been sent` })
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error sending email' })
    })
}
