/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
var t="%"||"+"||"-"||"*"||"/";

 var result="";


var o=a(result);//这样只会寻找第一个字符串"+"的位置，找到了就不管了
console.log(( a="+")==("+"||"s"));//为1，即"+"的位置，不是想要的"/"的位置
 var re1=/^[\*|\/\%].+/;
function a(str){
 
}


function calculator(){
  //if(result==0) if (result.slice(-1)!==".")   result="";
  result+=window.event.srcElement.innerText;
  input.value=result;
  
}
function resultcalculator(){
        if (input.value.match(re1))
  {
             input.value="输入错误";
         result="";
         return false;
  }
  
  input.value=Math.round(eval(input.value)*100000000)/100000000;
 result="";
  
  
   
}
function Clear(){
  result="";
  input.value=0;
}
function DEL(){
  
  if ((result!==0)||(input.value.slice(-1)==".")) 
  result=result.slice(0,result.length-1);
  input.value=result;
  if (result==0) return false;
  

}
function zero(){
  if (input.value.slice(-1).match(flag)) return false;
if ((input.value==0)&&(input.value.indexOf(".")==-1))return ;
    result+="0";
  input.value=result;
  
  
  
  
}
function dzero(){
  if (input.value.slice(-1).match(flag)) return false;
  if ((input.value==0)&&(input.value.indexOf(".")==-1))return false;
    result+="00";
  input.value=result;
}
function dot(){

  if (find(result,t)+1>=find(result,"."))  //
  {if (input.value.slice(-1).match(flag)) result+="0";
  result+=".";
  input.value=result;
  } 
}
var flag=/[\*|\/|\%|\+|\-]$/;
function calculator1(){
  
 if (input.value.slice(-1).match(flag)) {DEL();} ;
  result+=window.event.srcElement.innerText;
  input.value=result;
 }
function find(str,str1){
  var a=str.split("");
  var sum=0;
  for (var i=0;i<str.length;i++){
    if (str[i]==str1) sum++; 
  }
  return sum;  
}