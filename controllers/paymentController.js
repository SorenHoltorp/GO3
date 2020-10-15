//henter FreeUser model
const PaymentUser = require('../Models/PaymentUsers');

//hardcoder ny user ud fra model-klasse
let PaymentUser1 = new PaymentUser('Marcus', 'er', 'sej');

//controller
function userController(req, res) {
    res.end(JSON.stringify(PaymentUser1))
}

//eksporter controlleren ligesom user klassen
module.exports = paymentController;