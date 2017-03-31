


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


db =firebase.database();


var Airone = db.ref('Airone');
      Airone.on('value', function(snapshot) {
        console.log("Airone:"+snapshot.val());
        var sum = snapshot.val();
        insertQueue(sum)
        // document.querySelector("#Airone > input").checked = snapshot.val();
});

      var Airtwo = db.ref('Airtwo');
      Airtwo.on('value', function(snapshot) {
        console.log("Airtwo:"+snapshot.val());
       // document.querySelector("#Airtwo > input").checked = snapshot.val();
});
      var Current = db.ref('Current');
      Current.on('value', function(snapshot) {
        console.log("Current:"+snapshot.val());
        // document.querySelector("#ledroom > input").checked = snapshot.val();
});

      var Light_Row_one = db.ref('Light_Row_one');
      Light_Row_one.on('value', function(snapshot) {
        console.log("Light_Row_one:"+snapshot.val());
       document.querySelector("#Light_Row_one > input").checked = snapshot.val();
});
      var Light_Row_two = db.ref('Light_Row_two');
      Light_Row_two.on('value', function(snapshot) {
        console.log("Light_Row_two:"+snapshot.val());
         document.querySelector("#Light_Row_two > input").checked = snapshot.val();
});

      var Light_Row_three = db.ref('Light_Row_three');
      Light_Row_three.on('value', function(snapshot) {
        console.log("Light_Row_three:"+snapshot.val());
         document.querySelector("#Light_Row_three > input").checked = snapshot.val();
});
       var UserinRoom = db.ref('UserinRoom');
      UserinRoom.on('value', function(snapshot) {
        console.log("UserinRoom:"+snapshot.val());
        // document.getElementById('userinRoom').innerHTML = snapshot.val();
        // document.querySelector("#ledroom > input").checked = snapshot.val();
});
      var runAirone = db.ref('runAirone');
      Airone.on('value', function(snapshot) {
        console.log("runAirone:"+snapshot.val());
        document.querySelector("#runAirone > input").checked = snapshot.val();
});

      var runAirtwo = db.ref('runAirtwo');
      runAirtwo.on('value', function(snapshot) {
        console.log("runAirtwo:"+snapshot.val());
       document.querySelector("#runAirtwo > input").checked = snapshot.val();
});


console.log(runAirtwo);


var stac = new Array();
var getArray = []
console.log(getArray)




function insertQueue(item){
    for (var i = 0; i < item.length; i++) {
      inQueue(item[i])
       }

    }

function inQueue(data){


     stac.push(data)

    }

    chackDataQueue(stac)

function chackDataQueue(dataQueue){

    if (dataQueue.length <= 1) {

       outQueue()

    }else{

        timeOut()

    }

}

function outQueue(){

    while(!isEmpty()){
        console.log('out  ='+ stac.shift())

    }

}

function isEmpty(){
    return 0==stac.length
}

function timeOut(){
  // while(!isEmpty()){
  setInterval(function() { 
    stac2 = stac.shift(); 

  console.log(stac2);
  }, 3000)
   // }
}

