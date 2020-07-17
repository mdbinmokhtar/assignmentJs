//number type variable , string type variable , boolean type variable. Number type : je variable er output number hisabe ase seta hole number type variable , r je variable er output name ba ekadhik letter ba paragraph hisabe ase seta holo strig type vaiable, string type variable e input ekadhik letter hole "" er moddhe dite hoy . je variable er output true false diye ase seta holo boolean type variable.
//number type. 

var riceWeight = 78;
console.log(riceWeight);
var mangoKg = 20;
console.log(mangoKg);

// string type.

var paragraph = "Islam is the complete code of life";
console.log(paragraph);
var song = "allah amar rob. ei rob e amr sob"
console.log(song);

//boolean type
var isFatherCome = true;
console.log(isFatherCome);
var isCurrentHasGone = false;
console.log(isCurrentHasGone);

//string case change, index, split.
// string type variable e e "" er vetore sob kicu k lower case korte hole "string name.toLowerCase()" eta dite hobe . And upper case korte hole "string name.toUpperCase()" eta dite hobe. Example:

var dream = "I want to be good man . I want to go to jannah. My goal is to become a professional web developer so that I'm hard worrking";
console.log(dream.toLowerCase());
console.log(dream.toUpperCase());

// string type variable e kono kisu khujte hole "string name.indexOf('je jinish khujtesi')" eta dite hobe r eta number e output dekhabe mane oi word ta koto number jaiga theke suru hoise. suro the 0,1,2 evabe gone asbe r jodi oi word ta na pawa jai othoba vul hoi lekhate tahole output -1 asbe. Example We are looking for the word 'jannah':

var dream = "I want to be good man . I want to go to jannah. My goal is to become a professional web developer so that I'm hard worrking";
console.log(dream.indexOf('jannah'));

// split: string type variable e jodi amra kono kicur sapekkhe puro input k vag korte cai tahole "string name.split("jeta sapekkhe vag korte cai")" dite hobe. Example we want to divided with space:

var dream = "I want to be good man . I want to go to jannah. My goal is to become a professional web developer so that I'm hard worrking";
console.log(dream.split(" "));

//integer, flot. integer holo purno sonkha and float holo fruction. ebong 2ta number variable jog korle savabik jog e hobe. tobe 2 ta string jog korle tokho r jog hobena borong out put hisabe 2ta number e bose jabe. and duitar ektao jodi string type hoi taholeo jog hobena duita pashapashi bose jabe Example: 

var number1 = 10;
var number2 = 10.5;
console.log(number1+number2);
var number1 = "10";
var number2 = "10.5";
console.log(number1+number2);

// jodi ekta string ekta number hoi tahole string ta k number baniye jog kora  jai tokhon string number ta k parse korte hoy. jodi ditio number ta string thake mane "10.5" jodi emon thake tahole etake number korte hole nicher kaj ti korte hobe , jehetu ditio ta float number tai parse float diye korte hobe kintu jodi parseFloat na diye parseInt dei tahole jog hobe kintu fruction ta fele dibe:

var number1=10;
var number2="10.5";
number2 = parseFloat(number2);
console.log(number1+number2);

// e charao string k number bananor aro ekti system holo:

var number1=10;
var number2="10.5";
number2 = +number2
console.log(number1+number2);

//jodi ekta number variable k string variable e rupantor korte cai tahole nicher kajti korte hobe

var number1 = 10;
var number2 = 10.5;
number1 = "" + number1;
console.log(number1 + number2);

//amra jodi 0.1 and 0.2 k jog kori tahole savabik vabe 0.3 na ese 0.30000000 erokom onek gula asbe ex:
var number1 = 0.1;
var number2 = 0.2;
console.log(number1+number2);

// to etak fixed korar system holo:

var number1 = 0.1;
var number2 = 0.2;
var total = number1+number2;
total = total.toFixed(1); 
console.log(total);

// variable er jog biyog gun vag: jog korte hole 
var number1 = 20;
var number2 = 10;
var total = number1 + number2;
console.log(total);

//biyog korte hole 
var number1 = 20;
var number2 = 10;
var total = number2 - number1;
console.log(total);

// gun korte hole
var number1 = 20;
var number2 = 10;
var total = number1 * number2;
console.log(total);

// vag korte hole
var number1 = 20;
var number2 = 10;
var total = number1 / number2;
console.log(total);

// vagsesh ber korte hole 
var number1 = 20;
var number2 = 10;
var total = number1 % number2;
console.log(total);

// kono ekta variable er man 1 bariye setak man hisabe set kora jai
var number1 = 20;
var number2 = 10;
var newNumber2 = number2 + 1;
console.log(newNumber2);

// onnovabe
var number1 = 20;
var number2 = 10;
number2 = number2 + 1;
console.log(number2);

// shortcut 
var number1 = 20;
var number2 = 10;
number2++
console.log(number2);

// man 1 komiye setak man hisabe set korte hole
var number1 = 20;
var number2 = 10;
number2--
console.log(number2);

// duita string er output e space dite hole
var name1 = 'abdul';
var name2 = 'karim';
var result = name1+" "+name2;
console.log(result);

//Absolute: negative kina positive seta na dekhe mul sonkha k nite caile
var number = -5;
var absoluteNumber = Math.abs(number);
console.log(absoluteNumber);

// variable round: ekta sonkha fruction hole seta k purno sonkhai rupantor kora holo round er kaj. jodi seta half ba tar ceye ektu beshi hoi tahole tar poroborti purno sonkhai rupantor hobe. ar jodi half er ceye kom hoi tahole tar purboborti sonkhai rupantor hoye jabe exaple:
var number = 5.499999;
var result = Math.round(number);
console.log(result);

var number = 5.5;
var result = Math.round(number);
console.log(result);

//ceil: jodi fructional variable ta half er ceye kom o hoi tahole o eta poriborti purno sonkha hobe
var number = 5.1;
var result = Math.ceil(number);
console.log(result);

//floor: fructional variable ta joto beshi hok seta purboborti purno sonkha hobe
var number = 5.999999;
var result = Math.floor(number);
console.log(result);

// random: ekebar ekekta asbe. sonsomoi sunno theke one er moddhe j kono fruction asbe
var number = 5.499999;
var result = Math.random(number);
console.log(result);

// jodi 1-100 joner moddheme jekono ekta purno sonkhar lotteri banate hole
var number = Math.random(number)*100;
var result = number;
console.log(result)

var number = Math.random(number)*100;
var result = Math.round(number);
console.log(result)

// Condition
var mobilePrice = 15000;
if(mobilePrice <12000){
    console.log("I Will buy the mobile");
}
else{
    console.log("button set is enough for me");
}
var laptopPrice = 40000;
if(laptopPrice > 30000){
    console.log("I will buy the laptop");
}
else{
    console.log("Only mobile is enough for me");
}
var isOutSide = 'rain'
if(isOutSide != 'rain'){
    console.log("I will go to bazar");
}
else{
    console.log("I will stay in home");
}

// jodi 2ta condition thake r dutai full fill korte hoi sekhetre
var jobPaiso = true;
var savingAmount = 20000;
if(jobPaiso == true && savingAmount == 100000){
    console.log("you are ready for marrige");

}
else{
    console.log("Single life is better for you");
}

// jodi duita ekta condition full fill korle hobe 
var jobPaiso = true;
var savingAmount = 20000;
if(jobPaiso == true || savingAmount == 100000){
    console.log("you are ready for marrige");

}
else{
    console.log("Single life is better for you");
}

var jobPaiso = true;
var savingAmount = 20000;
if(jobPaiso == true && savingAmount == 100000){
    console.log("you are ready for marrige");

}
else if(jobPaiso == true){
    console.log("let's wait few more days");
}
else{
    console.log("Single life is better for you");
}












