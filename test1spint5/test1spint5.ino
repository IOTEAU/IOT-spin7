#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

int lamp = D1;
int lamp1 =D2;
int lamp2 =D3;
int lamp3 =D5;


#define FIREBASE_HOST "test1-59b46.firebaseio.com"
#define FIREBASE_AUTH "81LyQY5oyjuS9WNN9pzdn1gIoXbtzbbk1G9y4SE2"

#define WIFI_SSID "iPad"
#define WIFI_PASSWORD "mimimiml1111"

void setup() {
  // put your setup code here, to run once:
 pinMode(lamp,OUTPUT);
 pinMode(lamp1,OUTPUT);
 pinMode(lamp2,OUTPUT);
 pinMode(lamp3,OUTPUT);

 Serial.begin(115200);

 WiFi.mode(WIFI_STA);

 WiFi.begin (WIFI_SSID,WIFI_PASSWORD);
 Serial.println("connecting....");

 while (WiFi.status() != WL_CONNECTED){
  Serial.println(".");
  delay(500);
  
 }//loop while
Serial.println();
Serial.println("connecting.....");
Serial.println(WiFi.localIP());

Firebase.begin(FIREBASE_HOST,FIREBASE_AUTH);
 
}

void loop() {
  // put your main code here, to run repeatedly:
  int sum =Firebase.getInt("lamp");
  int sum1 =Firebase.getInt("lamp1");
  int sum2 =Firebase.getInt("lamp2");
  int sum3 =Firebase.getInt("lamp3");

  if(sum == 0){
    digitalWrite(lamp,HIGH);
    Serial.println("open");
  }else{
    digitalWrite(lamp,LOW);
    Serial.println("close");
  }//loop if
  if(sum1 == 0){
    digitalWrite(lamp1,HIGH);
    Serial.println("open1");
  }else{
    digitalWrite(lamp1,LOW);
    Serial.println("close1");
  }//loop if
  if(sum2 == 0){
    digitalWrite(lamp2,HIGH);
    Serial.println("open2");
  }else{
    digitalWrite(lamp2,LOW);
    Serial.println("close2");
  }//loop if
  if(sum3 == 0){
    digitalWrite(lamp3,HIGH);
    Serial.println("open3");
  }else{
    digitalWrite(lamp3,LOW);
    Serial.println("close3");
  }//loop if
  
}
