function BtnLogIn() {
    var email = document.getElementById('txt_email').value;
    var password = document.getElementById('txt_pass').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(err) {
            // Handle Errors here.
            var errorCode = err.code;
            var errorMessage = err.message;
            // var notErrorCode = user.code;
            if ((errorCode == 'auth/wrong-password')) {
                if (errorCode == 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                return;
            } else {
                window.location.assign("page2.html");
            }
            // firebase.auth().signInWithEmailAndPassword(email, password)
            //     .then(function(user) {
            //         // Success 
            //         if (errorCode == 'auth/wrong-password') {
            //             alert('Wrong password.');
            //         } else {
            //             window.location.assign("page2.html");
            //         }


            //     })

        })


};