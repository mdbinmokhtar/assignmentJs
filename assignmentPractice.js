//feetToMile : input hisabe kicu feet nite hobe and oi gulake mile e convart korte hobe

function feetToMile(feet){
    if(feet < 0){
        return "negative number doesn't support"; 
    }
    var mile = feet / 5280;
    return mile.toFixed(2);
}
var totalMile = feetToMile(34346);
console.log( totalMile);


// woodCalculator: 1ta chair , ekta table , 1ta bed banate ki poriman kat lagbe sta ber korte hobe. 14 ta chair 12 bed and 5 ta table banate total koto cubic feet kat lage seta output korte hobe . 1 ta chair banate 1cubic feet kat, 1 ta table banate 3 cubic feet kat , 1 ta bed banate 5 cubic feet kat lagbe.

function woodCalculator(chair, table, khat){
    const isValid = (value) => {
        if(value < 0 || value == undefined){ 
           return 0;
        }
        else{
            return value;
        }
    }

    var chairWoodAmount = isValid(chair) * 1;
    var tableWoodAmount = isValid(table) * 3;
    var khatWoodAmount = isValid(khat) * 5;
    var totalWoodAmount = chairWoodAmount + tableWoodAmount + khatWoodAmount;
    return totalWoodAmount;
}
var totalWoodneded = woodCalculator(14, 12, 5);
console.log( totalWoodneded, "cubic feet");



// brickCalculator: 1 theke 10 tola porjonto 15 feet kore . 11 the 20 tola porjonto 12 feet kore , 21 theke upore hole 10 feet kore. proti feet e 1k breck lage. joto tolai boluk se hisabe output dite hobe
function brickCalculator(numberOfFloors){
    if(numberOfFloors <1 || numberOfFloors == undefined){
        return "insert the right value";
    }
    else{
       if(numberOfFloors <= 10){
           return numberOfFloors*15*1000;
       }
       else if(numberOfFloors > 10 && numberOfFloors <=20){
           return (10*15*1000) + ((numberOfFloors - 10)*12*1000);
       }
       else{
           return (10*15*1000) + (10*12*1000) + ((numberOfFloors-20)*10*1000);
       }
    }
}
var buildingSize = brickCalculator(40);
console.log('brick nedded :', buildingSize);



// tinyFriend: ekta array er modde onnk gula name thakbe sekhan theke je lok  ta sobceye coto seta output hisabe dekhate hobe 


 // tinyFriend
function tinyFriend(friendList){
    if(friendList.length == 0){
        return 'The array is empty !';
    }
    else{
        var shortestName = friendList[0];
        for(var i=1; i<friendList.length; i++){
            if(friendList[i].length < shortestName.length){
                shortestName = friendList[i];
            }
        }
        return shortestName;        
    }  
}
var shortestName = tinyFriend(['jamal', 'saha', 'jim','sabi']);
console.log("my tiny friend:", shortestName);