
let totalCount = 0
let iteration = 1

let i = 0


function count(){
    
    document.getElementById("output").innerHTML = totalCount = totalCount + iteration;

    if(i){
    document.getElementById("fbUpgrade").innerHTML = (totalCount - totalCount%100 )/ 100 + "/Click"
    document.getElementById("fbPrice").innerHTML = (totalCount - (totalCount%100))
    }
}



function upgrade(tier,price){
    

    if(totalCount >= price){
        

        totalCount = totalCount - price
        iteration = iteration + tier
        
        

        document.getElementById("cPerClick").innerHTML = iteration
        document.getElementById("output").innerHTML = totalCount
        
    }
    else{
        alert("you can't afford that" )
    }


}

function finalButton(price){

    if(totalCount >= price && i == 0){
        totalCount = totalCount - price
        i = 1
        document.getElementById("fbUpgrade").innerHTML = (totalCount - totalCount%100 )/ 100 + "/Click"
        document.getElementById("fbPrice").innerHTML = (totalCount - (totalCount%100))

    }
    else if(totalCount<price && i == 0){
        alert("you can't afford that")
    }
    else if(i != 0){
                      
        iteration = iteration + (totalCount - totalCount%100 )/ 100
        totalCount = totalCount - (totalCount - (totalCount%100))
        document.getElementById("fbUpgrade").innerHTML = (totalCount - totalCount%100 )/ 100 + "/Click"
        document.getElementById("fbPrice").innerHTML = (totalCount - (totalCount%100))

    }
    document.getElementById("cPerClick").innerHTML = iteration
    document.getElementById("output").innerHTML = totalCount
}
