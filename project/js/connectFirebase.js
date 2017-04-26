// Initialize Firebase



// Initialize Firebase
var config = {
    apiKey: "AIzaSyB2_l8HIycLAdM6a9vA9XMaS_VPqxmBK1o",
    authDomain: "datacontro.firebaseapp.com",
    databaseURL: "https://datacontro.firebaseio.com",
    projectId: "datacontro",
    storageBucket: "datacontro.appspot.com",
    messagingSenderId: "585589132177"
};
firebase.initializeApp(config);



var dbFirebase = firebase.database();
var numPerple = dbFirebase.ref('UserinRoom');
var numPerples = numPerple.on('value', function(snapshot) {
    // console.log("Airtwo:" + snapshot.val());

    document.getElementById('userinRoom').innerHTML = snapshot.val()
});