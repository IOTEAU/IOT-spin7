(firebase.auth().onAuthStateChanged(user => {
    if (user) {

        var x = document.querySelectorAll(".tab-from-group");
        x[1].style.display = "block";

        var x = document.querySelectorAll(".tab-from-group");
        x[0].style.display = "none";

        document.getElementById('user-data').innerHTML = user.email;

        document.getElementById('id-button').textContent = "ออกจากระบบ"


        var checkStatusText = document.querySelectorAll(".col-md-3");
<<<<<<< Updated upstream
        checkStatusText[0].onclick = function () { checkStatus1() };
        function checkStatus1() {
=======
<<<<<<< HEAD
        checkStatusText[0].onclick = function() { checkStatus() };

        function checkStatus() {
=======
        checkStatusText[0].onclick = function () { checkStatus1() };
        function checkStatus1() {
>>>>>>> origin/master
>>>>>>> Stashed changes
            var x = document.querySelectorAll("#well-id");
            x[0].style.display = "none";
            var x = document.querySelectorAll("#well-id");
            x[1].style.display = "block";
            // document.getElementById('room').textContent = "ห้อง S101";
            

<<<<<<< Updated upstream
        };
        var checkStatusText = document.querySelectorAll(".col-md-3");
        checkStatusText[1].onclick = function () { checkStatus2() };
        function checkStatus2() {
=======
<<<<<<< HEAD

        }

        var checkStatusText = document.querySelectorAll(".col-md-3");
        checkStatusText[1].onclick = function() { checkStatus() };

        function checkStatus() {
=======
        };
        var checkStatusText = document.querySelectorAll(".col-md-3");
        checkStatusText[1].onclick = function () { checkStatus2() };
        function checkStatus2() {
>>>>>>> origin/master
>>>>>>> Stashed changes
            var x = document.querySelectorAll("#well-id");
            x[0].style.display = "none";
            var x = document.querySelectorAll("#well-id");
            x[1].style.display = "block";
            var x = document.querySelectorAll('#room');
            x[0].textContent = "ห้อง S102";

        };
        var checkStatusText = document.querySelectorAll(".col-md-3");
<<<<<<< Updated upstream
        checkStatusText[2].onclick = function () { checkStatus3() };
        function checkStatus3() {
=======
<<<<<<< HEAD
        checkStatusText[2].onclick = function() { checkStatus() };

        function checkStatus() {
=======
        checkStatusText[2].onclick = function () { checkStatus3() };
        function checkStatus3() {
>>>>>>> origin/master
>>>>>>> Stashed changes
            var x = document.querySelectorAll("#well-id");
            x[0].style.display = "none";
            var x = document.querySelectorAll("#well-id");
            x[1].style.display = "block";
            // var x = document.querySelectorAll('.room');
            // x[0].textContent = "ห้อง S103";

        };
        var checkStatusText = document.querySelectorAll(".col-md-3");
<<<<<<< Updated upstream
        checkStatusText[3].onclick = function () { checkStatus4() };
        function checkStatus4() {
=======
<<<<<<< HEAD
        checkStatusText[3].onclick = function() { checkStatus() };

        function checkStatus() {
=======
        checkStatusText[3].onclick = function () { checkStatus4() };
        function checkStatus4() {
>>>>>>> origin/master
>>>>>>> Stashed changes
            var x = document.querySelectorAll("#well-id");
            x[0].style.display = "none";
            var x = document.querySelectorAll("#well-id");
            x[1].style.display = "block";
            // var x = document.querySelectorAll('.room');
            // x[0].textContent = "ห้อง S104";

        };



    } else {
        document.getElementById('id-button').textContent = "เข้าสู่ระบบ"
        var x = document.querySelectorAll(".tab-from-group");
        x[1].style.display = "none";

        var x = document.querySelectorAll(".tab-from-group");
        x[0].style.display = "block";

    }



}));

function check(BtnLogIn) {

    if (firebase.auth().currentUser) {
        var index = location.href = "index.html"
        document.getElementById('id-button').innerHTML = index
        firebase.auth().signOut();
        document.getElementById("myForm").reset();




    }

    var email = document.getElementById('txt-email').value;
    var password = document.getElementById('txt-pass').value;

    firebase.auth().signInWithEmailAndPassword(email, password)

    .catch(function(err) {
        // Handle Errors here.
        var errorCode = err.code;
        var errorMessage = err.message;

        if (errorCode == 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        return;
    });






};