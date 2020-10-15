class user {
    constructor(firstname, lastname, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    }
}

class PaymentUser extends user {
    constructor(firstname, lastname, gender, payment) {
        super(firstname, lastname, gender);
        this.payment = payment;
    }
}

class FreeUser extends user {
    constructor (firstname, lastname, gender) {
        super(firstname, lastname, gender);
    }
}

class Image {
constructor(hetro)

}

class Interest {
constructor(homo)

}

class Match {
constructor(trans)

}


module.exports = user;
