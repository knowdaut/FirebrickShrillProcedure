function validateForm() {
  var x = document.forms["pwd"].value;
  if (x < 8) {
    alert("Password must be 8 characters long");
    return false;
  }
}