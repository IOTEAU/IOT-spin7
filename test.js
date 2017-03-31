// var test ={
//   name: 'maxz',
//   hbd:new Date(1995,2,24) ,
//   date:new Date (2011,10,5),
//   parent:{
//   	dad:'maxz',
//   	mon:'maxz123'
//   }
// }
// test.youRok = new Date(2013,12,6)
// // console.log(test.parent)
// console.log(test)
// var day =[
// 'S','M','T','W']
// for (var i = 0; i < day.length; i++) {
// 	day[i]
// 	console.log(day[i])
// }
// var world =['A','B','C','D']
// for(var prop of world){
// 	console.log(`${prop}`)
// }
// var plusTwo = (number) => {
// 	for(var num of number){
// 		console.log(num+2)
// 	}
// }
// plusTwo([1,2,3,4,64])
// plusTwo([1,2,3,4,64,12,13,24,3])
// function plusTwo(number){
// 	return number+2
// }
// function sendvul(){
// 	var inputValue=document.getElementById('vul').value;
// if(inputValue==''){
// 	alert('input P')
// }else{
// 	alert('ok')
// }
// getVulue(inputValue);// console.log(x)
// Queue(inputValue)
// return inputValue;
// }
// function getVulue(number){
//  var world = new Array(20)
// world.push(number)
// world.shift()
// 	for(var worldOne of world){
// 	console.log(`${worldOne}`)
// }
// }
// function Queue()
// {
// 	this.stac=new Array();
//  	this.dequeue=function(){
//   	return this.stac.pop();
//  }
//  	this.enqueue=function(item){
//   	this.stac.unshift(item);
//  }
// }
// 	var Q=new Queue();
// 	Q.enqueue();
// 	console.log(Q.dequeue());
// // function Deque()
// {
// this.stac=new Array();
// this.popback=function(){
// return this.stac.pop();
// }
// this.pushback=function(item){
// this.stac.push(item);
// }
// this.popfront=function(){
// return this.stac.shift();
// }
// this.pushfront=function(item){
// this.stac.unshift(item);
// }
// }
// var deque=new Deque();
// deque.pushfront("A");
// deque.pushfront("B");
// deque.pushback("C");
// console.log(deque.popfront());
// console.log(deque.popback());


// function Queue()
// { 
//  this.stac=new Array();
//  this.dequeue=function(){

//   return this.stac.pop(); 

//  } 
//  this.enqueue=function(item,callback){
 	


//   this.stac.unshift(item);
// setTimeout(function(){}, 3000);
//  }
// }

// var Q=new Queue();

// Q.enqueue("A");

// Q.enqueue("B");

// Q.enqueue("C");

// console.log(Q.dequeue());
// console.log(Q.dequeue());
// console.log(Q.dequeue());

// var Queue = function() {
//   this.first = null;
//   this.last = null;
//   this.size = 0;
// };

// var Node = function(data) {
//   this.data = data;
//   this.next = null;
// };

// Queue.prototype.enqueue = function(data) {
//   var node = new Node(data);

//   if (!this.first){ // for empty list first and last are the same
//     this.first = node;
//     this.last = node;
    
//   } else { // otherwise we stick it on the end
//     this.last.next=node;
//     this.last=node;
//   }

//   this.size += 1;
//   return node;

// };

// Queue.prototype.dequeue = function() {
//   if (!this.first) //check for empty list
//     return null;

//   temp = this.first;
//   setTimeout(function(){},3000); // grab top of list
//   if (this.first==this.last) {
//     this.last=null;  // when we need to pop the last one
//   }
//   this.first = this.first.next; // move top of list down
//   this.size -= 1;
//   return temp;
// };


// var ggg = new  Queue();

// for (var i = 1; i <= 5; i++) {
	 // ggg.enqueue(i);
	 // console.log(i);
// }



var Queue = function() {
  this.first = null;
  this.size = 0;
};

var Node = function(data) {
  this.data = data;
  this.next = null;
};

Queue.prototype.enqueue = function(data) {
  var node = new Node(data);

  if (!this.first){
    this.first = node;
  } else {
    n = this.first;
    while (n.next) {
      n = n.next;
    }
    n.next = node;
  }

  this.size += 1;
  return node;
};

Queue.prototype.dequeue = function() {
  temp = this.first;
  this.first = this.first.next;
  this.size -= 1;
  return temp;
};

 var ffff =new Queue();
 chackQueue(ffff);

 
 for(var i =1;i<=50;i++){
	 ffff.enqueue(i)

    
}// send val in Queue
console.log(ffff)

function chackQueue(queue){
	if (queue <= 50) {
		openAir();
	}else{
		 setTimeout(function(){},3000);
		openAir();
	}
}

function openAir(){
	for(var i =1;i<=2;i++){
  // var open= ffff.dequeue() //pull val out Queue
}
console.log('open')
}



