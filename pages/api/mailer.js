const sibapi = require('sib-api-v3-sdk')
const defaultClient = sibapi.ApiClient.instance
const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = ''
const apiInstance = new sibapi.TransactionalEmailsApi()
const emailToSend = new sibapi.SendSmtpEmail()

export default function handler(req, res) {
  emailToSend.name = "Aiwa Electronics - Mail"
  emailToSend.subject = "Aiwa Electronics - "
  emailToSend.sender = {name: "Anónimo", email:"amolina@totalhome.com.ar"}
  emailToSend.type = "classic"
  emailToSend.htmlContent = 'Mensaje vacío'
  emailToSend.to = [{email:"amolina@totalhome.com.ar"}]
  // email.scheduledAt = '2018-01-01 00:00:01'
  
  const {name, email, msg} = req.body
  if (name && email && msg) {
    emailToSend.sender = {name: name, email: email}
    emailToSend.htmlContent = msg
    apiInstance.sendTransacEmail(emailToSend).then(function(data) {
      res.status(200).json(data)
      }, function(error) {
        res.status(404).json(error)
    })
  } else {
    res.status(404).json('Faltó alguno de los parámetros')
  }
}