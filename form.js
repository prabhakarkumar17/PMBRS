function validate() {
    var a = document.getElementById("userid").value;
    if (a == "") {
        document.getElementById("msg").innerHTML = "**User Name cant be blank";
        return false;
    }
    var b = document.getElementById("password").value;
}
