export class PageValidations {

  public static emailValidator(inputEmail) {
    // There should be any kind of validations here
    if (inputEmail) {
      return;
    }
    throw 'invalid email';
  }

  public static passwordValidator(inputPassword) {
    // There should be any kind of validations here
    if (inputPassword) {
      return;
    }
    throw 'invalid password';
  }

}
