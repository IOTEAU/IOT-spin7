#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

int led1 = D1;
int led2 = D2;



//config firebas
#define FIREBASE_HOST "testqueue-aaa05.firebaseio.com"
#define FIREBASE_AUTH "gV6iZB6o2p55fHiEPcuXv02NABEMfzRpeJ1QhOMI"

//define wifi
#define WIFI_SSID "iPad"
#define WIFI_PASSWORD "mimimiml1111"


void setup(){
Serial.begin(115200);

  pinMode(led1,OUTPUT);
  pinMode(led2,OUTPUT);




  WiFi.mode(WIFI_STA);
  //connect to wifi.
  WiFi.begin(WIFI_SSID,WIFI_PASSWORD);
  Serial.println("connecting....");


  while (WiFi.status() != WL_CONNECTED){
    Serial.println(".");
    delay(500);
  }
  Serial.println();
  Serial.println("connecting :");
  Serial.print(WiFi.localIP());




  Firebase.begin(FIREBASE_HOST,FIREBASE_AUTH);



  

}
void loop(){

  int num=Firebase.getInt("num");


  if(num==1){
    digitalWrite(led1,LOW);
  }else if(num==2){
     digitalWrite(led2,LOW);
  }else{
   digitalWrite(led1,HIGH);
   digitalWrite(led2,HIGH);
  }

  
delay(2000);  
}


