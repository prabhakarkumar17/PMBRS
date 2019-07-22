function validate() {
    var a = document.getElementById("userid").value;
    if (a == "") {
        document.getElementById("msg").innerHTML = "**Please enter user name";
        return false;
    }
    if ((a.length < 3) || (a.length > 25)) {
        document.getElementById("msg").innerHTML = "**Please enter user name more than 3 characters";
        return false;
    }
    var b = document.getElementById("password").value;
}