function form_validation() {
  var a = document.forms["signUpForm"]["firstname_signUp"].value;
  var b = document.forms["signUpForm"]["lastname_signUp"].value;
  var c = document.forms["signUpForm"]["email_signUp"].value;
  var d = document.forms["signUpForm"]["phone_number_signUp"].value;

  var x = document.forms["signUpForm"]["password_signUp"].value;
  var y = document.forms["signUpForm"]["password_repeat_signUp"].value;

  //check if all field are filled out
  if (a == "") {
    alert("Firstname must be filled out");
    return false;
  } else if (b == "") {
    alert("Lastname must be filled out");
    return false;
  } else if (x == "") {
    alert("Password must be filled out");
    return false;
  } else if (y == "") {
    alert("Please repeat your password");
    return false;
  } else if (x != y) {
    alert("the two password you entered are different");
    return false;
  } else if (c == "") {
    alert("E-mail address must be filled out");
    return false;
  } else if (d == "") {
    alert("Phone number must be filled out");
    return false;
  }

  var re_email = /\S+@\S+\.\S+/; // email address must contains "@" and "."
  var re_phone_number = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/; // accept 1231231234, 123.123.1234, 123-123-1234, (123)1231234

  var patt = new RegExp(re_email);
  var res = patt.test(String(c).toLowerCase());
  if (!res) {
    alert("Please enter a vailed e-mail address");
    return false;
  }

  patt = new RegExp(re_phone_number);
  res = patt.test(d);
  if (!res) {
    alert("Please enter a vailed phone number");
    return false;
  }

  //user input pass all test, display success message and reload page
  alert("success");
  reload();
  return false;
}
