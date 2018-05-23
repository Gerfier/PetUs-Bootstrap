
var validate = function () {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    //var testing_username = "adoptpet";
    var testing_email = "adopt@mail.com";
    var testing_password = "happypet";

    //display message if not input provided
    if (email == '' && password == '') {
        alert('Please fill out both spaces');
    }
    else //check that both spaces are filled
        if ((email == '' && password == testing_password) || (email == testing_email && password == '')) {
            alert('Please fill out both spaces');
        }

        else    //redirect to next page if email and password matched the correct ones
            if (email == testing_email && password == testing_password) {
                //load the following
                window.open("https://www.google.com/");
            }
            else {
                //if none of the above occurs, display error message
                alert('Your password or username are incorrect!');
            }



    console.log(username);
}
