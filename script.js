
 

 var b=[];
  
 for(var i=1;i<=5;i++){
  
  var a=document.createElement('button');
  a.setAttribute("class","btn btn-primary");
  a.innerHTML=i;
  b.push(a);
  document.body.appendChild(b[b.length-1]);
}

function add_img() { 
	var img = document.createElement('img'); 
    img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
	document.getElementById('body').appendChild(img);
}

 var calculateLength=function(){
  var a=document.getElementById('myLength').value;
  
  var request=new XMLHttpRequest();
request.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=QVTocnSJbfJ9rxhSuNgLP2N4iRIV46L0&q='+a+'&limit=25&offset=0&rating=g&lang=en', true)
request.send();
request.onload = function(){
var data = JSON.parse(this.response);
console.log(data);

var columnb = document.getElementById('columnb');
var columnc = document.getElementById('columnc');
var columnd = document.getElementById('columnd');
var columne = document.getElementById('columne');
var columnf = document.getElementById('columnf');
console.log(columnb);
console.log(columnc);
var arr=[columnb,columnc,columnd,columne,columnf];
var arr1=[];
for(var i=0;i<25;i++){
  arr1.push(data.data[i].images.fixed_width.url);
  
}
function print(x){
  
  for(var i=0;i<=4;i++){
  if(x==1){
  var img = document.createElement('img'); 
    img.src = arr1[i*x]; 
    
  arr[i].innerHTML=img;
  arr[i].appendChild(img);}
  
  if(x==2 || x==3){
  var img = document.createElement('img'); 
    img.src = arr1[i+(x*x+1)]; 
  arr[i].innerHTML=img;
  arr[i].appendChild(img);}
  
  
  if(x==4){
    var img = document.createElement('img'); 
      img.src = arr1[i+15]; 
    arr[i].innerHTML=img;
    arr[i].appendChild(img);}

  if(x==5){
    var img = document.createElement('img'); 
      img.src = arr1[i+20]; 
    arr[i].innerHTML=img;
    arr[i].appendChild(img);}

}}
b.forEach(element => {element.onclick=()=>print(element.innerHTML);                                                      
});

}
}









 







