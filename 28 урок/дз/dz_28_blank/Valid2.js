class Valid2 extends Valid {
    constructor(email, password, isValid, emailError, passwordError) {
        super(email, password, isValid);
        this.emailError = '';
        this.passwordError = '';
    }
    validate() {
        if (this.password.length > 6 && this.email.length > 0) this.isValid = true;
        if (this.password.length < 6) this.passwordError = 'min length 6';
        if (this.email.length < 1) this.emailError = 'email empty';
    }
}