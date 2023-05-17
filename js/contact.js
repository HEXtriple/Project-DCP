//grab document information when button is pressed
$(document).ready(function () {
    $("#submit").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        //check if any fields are empty
        if (checkEmpty(name) || checkEmpty(email) || checkEmpty(message)) {
            alert("Please fill out all fields.");
        }
        //check if email is correctly formatted
        else if (!checkEmail(email)) {
            alert("Please enter a valid email.");
        }
        //send email
        else {
            $.ajax({
                url: 'contact.php',
                type: 'post',
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                success: function (response) {
                    alert("Message sent!");
                    $("#name").val("");
                    $("#email").val("");
                    $("#message").val("");
                }
            });
        }
    });
});

//check email is correctly formatted
function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//check if input is empty
function checkEmpty(input) {
    if (input.length == 0) {
        return true;
    }
    return false;
}