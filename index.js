// Code your solutions in this file
function writeCards(array,event){
    var newArray = [];
    let n =array.length;
    for(let i=0;i<n;i++){
        newArray.push('Thank you,'+" "+array[i]+","+" "+'for the wonderful'+" "+'surprise'+" "+'gift!')
    }
    return newArray
}

function printBadges (names) {
    for (let i = 0; i < names.length; i++) {
      console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
    }
    return names;
  }


  function countDown (number){
    
        for(let i = number; !(i<0); i--){
            let num = number -1
            console.log(i)
        }
}


countDown(5)


