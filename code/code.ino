#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
int state=LOW;
int state1=LOW;
int led1 = D1;
int led2 = D2;
int led = D3;
int led3 = D4;
int led4 = D5;
int led5 = D6;

int count = 0;

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
  pinMode(led3,OUTPUT);
  pinMode(led4,OUTPUT);
  pinMode(led,INPUT);
  pinMode(led5,INPUT);



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

digitalWrite(led1,HIGH);
digitalWrite(led2,HIGH);
digitalWrite(led3,HIGH);
digitalWrite(led4,HIGH);


  Firebase.begin(FIREBASE_HOST,FIREBASE_AUTH);
  Firebase.set("num2",0);



  

}
void loop(){

  counting();

  int num=Firebase.getInt("num");
  int num1=Firebase.getInt("num2");

  if(num==1){
    digitalWrite(led1,LOW);
  }else if(num==2){
     digitalWrite(led2,LOW);
  }else{
   digitalWrite(led1,HIGH);
   digitalWrite(led2,HIGH);
  }

 if(num1 ==1){
  digitalWrite(led3,LOW);
 }else if(num1==5){
  digitalWrite(led4,LOW);
 }

  
delay(500);  
}


void counting(){
 state=digitalRead(led);
  state1=digitalRead(led5);
 
  if(state == LOW  ){
    count++;
// Serial.println(count);
    
 
  }else if(state1 == LOW){
    count--;
  }
  Firebase.set("num2",count);
 
  

}

