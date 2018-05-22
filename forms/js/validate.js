
var validate = function () {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    //var testing_username = "adoptpet";
    var testing_email = "adopt@mail.com";
    var testing_password = "happypet";


    if (email == '' && password == '') {
        document.getElementById('message').innerHTML = 'Please fill out both spaces';
    }
    else
        if ((email == '' && password == testing_password) || (email == testing_email && password == '')) {
            document.getElementById('message').innerHTML = 'Please fill out both spaces';
        }

        else
            if (email == testing_email && password == testing_password) {
                document.getElementById('message').innerHTML = 'Success!';
            }
            else {
                document.getElementById('message').innerHTML = 'Your password or username are incorrect!';
            }



    console.log(username);
}
