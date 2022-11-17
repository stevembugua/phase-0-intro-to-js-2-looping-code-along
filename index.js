// Code your solutions in this file
function writeCards(array,event){
    var newArray = [];
    let n =array.length;
    for(let i=0;i<n;i++){
        newArray.push('Thank you,'+" "+array[i]+","+" "+'for the wonderful'+" "+'surprise'+" "+'gift!')
    }
    return newArray
}



  function countDown (number){
    
        for(let i = number; !(i<0); i--){
            console.log(i)
        }
}


countDown(5)


