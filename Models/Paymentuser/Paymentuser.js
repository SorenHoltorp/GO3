class PaymentUser extends user {
    constructor(firstname, lastname, gender, payment) {
        super(firstname, lastname, gender);
        this.payment = payment;
    }
}

module.exports = PaymentUser;