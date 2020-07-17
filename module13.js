//  Array: ekta variable er vetor koyekta elemenat eksathe thakle seta holo array. array er protiti element [] er vetore thake . ebong protiti element er por , hobe. ebong elementgulo 0 theke gona suru hobe.
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
console.log(bazarList); 

// kono ekta element k khujte hole tar position bole call korte hobe 
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
console.log(bazarList[3]); 

//onnovabe
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
var tinNumberBazar = bazarList[3]
console.log(tinNumberBazar); 

//aray er vetor konokisu replace korte caile
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
bazarList[3] = 'dim';
console.log(bazarList)

// position jante hole
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
console.log(bazarList.indexOf('alu')); 

// array er vetor new add korte caile
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
console.log(bazarList.push('saban')); 

var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
bazarList.push('saban');
bazarList.push('peyaj');
console.log(bazarList); 

// array er length jante
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
bazarList.push('saban');
bazarList.push('peyaj');
console.log(bazarList); 

// array er last theke kono kichu k ber korte hole 
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
bazarList.pop();
console.log(bazarList); 

// array er prothom theke kono element k ber korte hole 
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
bazarList.shift();
console.log(bazarList);

// array er shurute kono element add korte caile
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
bazarList.unshift('murgi');
console.log(bazarList); 

// slice: variable list er ekta nirdisto poriman element nite hole
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
var part = bazarList.slice(2);
console.log(part);
console.log(bazarList); 

// nirdisto jaiga theke nirdisto jaiga porjonto elementgulo nite caile
var bazarList = ['cal', 'dal', 'alu', 'muri', 'sobji'];
var part = bazarList.slice(2, 4);
console.log(part);
console.log(bazarList);

// While loop: nirdisto condition e ekta variable run korle oi condition fullfill howa porjonto bar bar output dekhabe. r protiti output e 1 kore barbe jotokkhon porjonto condition full fill na hoi.
var num = 5;
while (num <= 10){
    console.log(num);
    num++
}
// for loop : ekta nirdisto sonkhok sonkhar upor loop hobe. ex ekta array thakbe , oi array er vetor nirdisto sonkhok sonkhar jonno loop hobe. for loop er jonno 3 ta jinish thakte hobe 1. ekta variable thakte hobe 2. ekta condition thakte hobe. 3. ekta i++ thakte hobe.
for(var i = 0; i<10; i++){
    console.log(i);
}

// jodi amra ekta array dei
var friends = ['shakil', 'saiful', 'jakir', 'sakib',];
for(var i = 0; i<friends.length; i++){
    var element = friends[i];
    console.log(element);
}

//Switch:
num = 5;
switch(num){
    case 1000:
        console.log('I am 1000')
        break;
    case 100:
        console.log('i am 100')
        break;
    case 20:
    case 10:
        console.log('I am either 20 or 10') 
        break;
    default:
        console.log('i dont know who you are')           
}

// function: er vetor joto kisu thakbe function dhore call korlei sob bole debe.
function sonarBangla(){
    console.log('amaar sonar bangla ami tomai bhalobasi');
    console.log('cirodin tomar akash');
}
sonarBangla();

function doubleIt(num){
    var result = num*2;
    console.log(result);
}

doubleIt(100);
doubleIt(500);

// sobhula doubleIt niye total value make korte caile
function doubleIt(num){
    var result = num*2;
    return(result)
}
var first = doubleIt(50);
var second = doubleIt(200)
console.log(first,second);

// r total ber korte caile
function doubleIt(num){
    var result = num*2
    return(result);
}
var first = doubleIt(50);
var second = doubleIt(200);
var total = first+second;
console.log(total);

function add (num1, num2){
    var result = num1+num2;
    return(result);
}
var sum = add(100,200);
console.log(sum);

//object:
var student1 = {id: 123, phone: 398897, name: 'saki'};
var student2 = {id: 345, phone: 39837, name: 'jami'};
console.log(student1);
console.log(student2);

// ekta object theke niedisto ekta property nite hole 
var student1 = {id: 123, phone: 398897, name: 'saki'};
var student2 = {id: 345, phone: 39837, name: 'jami'};
var phonNo = student1.phone;
console.log(phonNo);

// another way
var student1 = {id: 123, phone: 398897, name: 'saki'};
var student2 = {id: 345, phone: 39837, name: 'jami'};
var phonNo = student1['phone'];
console.log(phonNo);

// another way
var student1 = {id: 123, phone: 398897, name: 'saki'};
var student2 = {id: 345, phone: 39837, name: 'jami'};
var phonePropName = "phone";
var phonNo = student1[phonePropName]
console.log(phonNo);

// update property

var student1 = {id: 123, phone: 398897, name: 'saki'};
var student2 = {id: 345, phone: 39837, name: 'jami'};

student2.phone = 384387
console.log(student2)

// anothe way
var student1 = {id: 123, phone: 398897, name: 'saki'};
var student2 = {id: 345, phone: 39837, name: 'jami'};

student2['phone'] = 45646346
console.log(student2)

var student1 = {id: 123, phone: 398897, name: 'saki'};
var student2 = {id: 345, phone: 39837, name: 'jami'};
var phonePropName = "phone";
student2[phonePropName] = 9874538975
console.log(student2)

//add new property
var student1 = {id: 123, phone: 398897, name: 'saki'};
var student2 = {id: 345, phone: 39837, name: 'jami'};
var addressPropName = "ctg";
student1.address = 'Dhaka';
student1["address"] = 'rajshahi';
student1[addressPropName] = 'lakshmipur';
console.log(student1)



