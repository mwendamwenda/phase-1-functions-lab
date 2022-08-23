// Code your solution in this file!
function distanceFromHqInBlocks(value){
   if(value>42){
    return value - 42;
   } else{
    return 42-value;
   }
}
function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value)*264
}
function distanceTravelledInFeet(start,destination){
    return Math.abs((destination-start)*264);
}
function calculatesFarePrice(start,destination){
    let distanceInFeet= distanceTravelledInFeet(start,destination)
    if(distanceInFeet<400){
        return 0;
    }else if(distanceInFeet>400 && distanceInFeet <2000){
        return(distanceInFeet-400)*0.02;
    }else if(distanceInFeet>2500){
        return "cannot travel that far"
    }

    return 25;
}




