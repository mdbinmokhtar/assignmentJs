// inch to feet: jodi shodhu mateo ekta sonkha theke amra feet ber korte cai
var inch = 156;
var feet = inch/12;
console.log(feet);

// eksathe onnkgula sonkha theke feet ber korte hole
function inchFeet(inch){
  var feet = inch/12;
   return feet 
}
var need = [200,443,444,222];

var needToFeet = inchFeet(need[0]);
console.log(needToFeet);
var needToFeet = inchFeet(need[1]);
console.log(needToFeet);
var needToFeet = inchFeet(need[2]);
console.log(needToFeet);
var needToFeet = inchFeet(need[3]);
console.log(needToFeet);

// let and const: kono variable declare korle jodi seta amra porobortite change kori tahoel amra var na diye let debo. ar jodi amra porobortite ar change na kori tahole amra var er jaygai const debo.

//leap year

//factorial
//10!=1*2*3*4*5*6*7*8*9*10
// jodi amra for loop diye factorial er hisab korte cai
var factorial = 1;
for(var i = 1; i <= 10; i++ ){
    factorial = factorial*i;
    console.log(i,factorial);
}

// factorial using for loop
function factorialCount(n){
    var factorial = 1;
    for(var i = 1; i <= 1n; i++ ){
        factorial = factorial*i;
    }
    return factorial
}
var result = factorialCount(9);
console.log(result);



// factorial using while loop
function factorialCount(n){
    var i = 1;
    var fact = 1;
    while(i <= n){
        fact = fact*i;
        i++;
    }
    return fact;
}
var result = factorialCount(9);
console.log(result);

//recursive function : factorial using rescursive
// 5!= 1*2*3*4*5 0r 4!*5 0r (5-1)!*5 
// n!= (n-1)*n or n*(n-1)
function factorialCount(n){
    if (n==0){
        return 1;
    }
    else{
        return n* factorialCount(n-1);
    }
}
var result= factorialCount(10);
console.log(result);

//fibonacci 
// 011235813
// 2= (2-1)+(2-2)
// 3= (3-1)+(3-2)
// that means ekta number er fibonacci holo oi number theke prothom o ditio number ta dad dewa karon oi number theke prothom o ditio number er jogfol holo oi number ta.
var fibo =[0,1];
for (var i=2 ; i<=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
} 
console.log(fibo);

function fibonacci(n){
    var fibo =[0,1];
    for (var i=2 ; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    } 
    return fibo;

}
var result = fibonacci(10);
console.log(result);

// fobonacci using recursing way
function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}
var result=fibonacci(10);
console.log(result);

// fibonacci series in recursive way

// prime number: je sonkha k 1 and oi sonkha chara onno sonkha diye vag jaina take prime number bole.
var n = 17;
for(i = 2; i< n; i++){
    console.log(i, n%i);
    if(n%i == 0){
        console.log('not a prime number');
        break;
        
    }
    
}

// anothe way
function isPrime (n){
    for(i = 2; i < n; i++){
        if(n%i == 0){
            return 'not a prime number'
        }
        return 'a prime number'
    }
}
var result = isPrime(17);
console.log(result);

