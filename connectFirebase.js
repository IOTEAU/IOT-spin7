
db =firebase.database();


var ledroom = db.ref('Airone');
      ledroom.on('value', function(snapshot) {
        console.log("Airone:"+snapshot.val());
        // document.querySelector("#ledroom > input").checked = snapshot.val();
});

      var ledroom = db.ref('Airtwo');
      ledroom.on('value', function(snapshot) {
        console.log("Airtwo:"+snapshot.val());
        // document.querySelector("#ledroom > input").checked = snapshot.val();
});