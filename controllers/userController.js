//henter User model
const user = require('../Models/Users/Users');

//hardcoder ny user ud fra model-klasse
let user1 = new user('Soren', 'er', 'sej');

//controller
function userController(req, res) {
    res.end(JSON.stringify(user1))
}

//eksporter controlleren
module.exports = userController;