//henter FreeUser model
const FreeUser = require('../Models/FreeUsers');

//hardcoder ny user ud fra model-klasse
let FreeUser1 = new FreeUser('Thomas', 'er', 'sej');

//controller
function freeController(req, res) {
    res.end(JSON.stringify(FreeUser1))
}

//eksporter controlleren ligesom user klassen
module.exports = freeController;