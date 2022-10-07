var arabalar =["honda","bmw","mercedes"];
var i=0;
while(arabalar[i]){
    console.log(arabalar[i]);
    i++;
    
}
var sayı =5;
while(sayı==5){
    console.log("sayımız 5 e eşittir ");
   break;
    
}

var sayı1=1;
var toplam =0;
while(sayı1<=10){
toplam+=sayı1;
sayı1++;
}

console.log("toplamı "+toplam);

var meyve = ["Muz", "Portakal", "Elma", "Kiraz","Şeftali"];
var i =0;
while(i<meyve.length){
    var a =meyve[i];
    i++;
    console.log("meyveleri a ya atadık : "+ a)
}

var i=0;
   
   do{
  
   var x=Math.floor(Math.random() * Math.floor(100));
    
   i++;
     
   }while(x!=50);
   
   console.log("kaç tahminde buldun..:",i);