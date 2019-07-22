function validate() {
    //FOR NAME VALIDATION

    var name = document.getElementById("name").value;
    if (name.length == "") {
        document.getElementById("error_name").innerHTML = "**name should not be blank";

    }
    if ((name.length < 3) || (name.length > 25)) {
        document.getElementById("error_name").innerHTML = "**name should be within range of 3 to 25 words";
    }

    // FOR EMAIL VALIDATION
    var text = document.getElementById("email").value;
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,20})$/;

    if (regx.test(text) == false) {
        document.getElementById("error_email").innerHTML = "**enter valid email";

    }

    //FOR CONTACT VALIDATION
    var mobile = document.getElementById("contact_no").value;
    var contact = /^[6-9]\d{9}$/;

    if (contact.test(mobile) == false) {
        document.getElementById("error_contact").innerHTML = "**enter valid contact no";

    }

    // FOR DATE VALIDATION
    var dat = document.getElementById("date").value;
    var date = /^([1-31])([1-12])([1990-2030])$/;

    if (date.test(dat) == false) {
        document.getElementById("error_date").innerHTML = "**enter valid date";
    }

}