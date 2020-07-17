//Swap
var a = 5;
var b = 7;
console.log("before swap a=", a , "b=", b);
var temp = a;
a = b;
b = temp;
console.log("after swap a=", a , "b=", b);

var x = 5; 
var y = 7;
x = x + y;
y = x - y;
x = x -y;
console.log("after swap x=", x, "b=", b);

var p = 5;
var q = 7;
[ p, q] = [q, p];
console.log("after swap p=", p, "q=", b)

//random
var num = 3.3524
var result = Math.floor(num)
var result2 = Math.ceil(num);
var result3 = Math.round(num);
var randomNum = Math.random(num)*6;
var outPut = Math.round(randomNum);
console.log(outPut);

for(i = 0; i < 10; i++){
    var randomNum = Math.random(num)*6;
    var outPut = Math.round(randomNum);
    console.log(outPut);


}

// find max value

var shakil = 470;
var jakir = 353;
var saiful = 333;
// if(shakil < jakir){
//     if (jakir < saiful)
//     console.log ('saiful is bigger');
// }
// else{
//     console.log('jakir is bigger');
// }
var max = Math.max(shakil, jakir , saiful);
console.log(max);

// kono ekta array er moddhe theke highst value ber korar system.
var num = [shilil , jakir, saiful , siddik , saha , lim];
var max = [0];
for(i = 0; i < num.length; i++){

    var element = num[i];
    if (element > max){
        max = element
    }

}
console.log('highst value is :', max);

// sum
var number = [24,54,65,34,76,45];
var sum = 0;
for ( var i=0; i < number.length; i++ ){
    var element = number[i];
    sum = sum + element;
}
console.log('total of the number:', sum);

function arraySum (number){
    var sum = 0;
    for(var i = 0; i < number.length; i++){
        var element = number[0]
        sum = sum + element;
    }
    return sum;
}
var number = [45,46,64,64,54,100];
var result = arraySum(number)
console.log('sum of number:', result);