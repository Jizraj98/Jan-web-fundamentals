var num=prompt(" enter the nth number");
var defaul=0;
console.log(defaul);
var num1=1;
console.log(num1);
var num2=1;
console.log(num2);
for(var i=3;i<=num;i++ ){
    var num3=num1+num2;
    console.log(num3);
    num1=num2;
    num2=num3; 
}
