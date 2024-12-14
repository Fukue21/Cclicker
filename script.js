
let totalCount = 5000
let iteration = 1

let i = 0
document.getElementById("pixels").innerHTML = "pixels: " + totalCount;
 


function count(){
    
    document.getElementById("output").innerHTML = totalCount = totalCount + iteration;
  

    if(i){
    document.getElementById("fbUpgrade").innerHTML = (totalCount - totalCount%100 )/ 100 + "/Click" 
    document.getElementById("fbPrice").innerHTML = (totalCount - (totalCount%100))
    }

    
}

function upgrade(tier,price,t){
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

function cf(){

    let b = document.getElementsByName("wawa")[0].value
    
    if (b > totalCount){
        alert("you can't afford that!")
        return 0;
    }
    let a = prompt("[H] - heads | [T] - tails")
    let c = 0

    switch(a){
        case 'h': c = 'heads'; break;
        case 't': c = 'tails'; break;
        case 'H': c = 'heads'; break;
        default: console.log("a"); c = 'tails'; break;
    }

    let coin = Math.floor(Math.random() * 2 )
    switch(coin){
        case 0: coin = 'heads';break;
        case 1: coin = 'tails';break;
    }
    console.log(coin)

    if(coin == c){
        document.getElementById('result').innerHTML = 'the coin landed on... <br> ' + coin + '<br><br> You win!';
        totalCount = (totalCount + 1 * b)
    }
    else{
        document.getElementById('result').innerHTML = 'the coin landed on... <br> ' + coin + '<br><br> You lose!';
        totalCount -= b
    }
    document.getElementById("pixels").innerHTML = "pixels: " + totalCount;
    console.log(totalCount)
}

function dr(){
    
    let b = document.getElementsByName("wawa")[0].value
    
    if (b > totalCount){
        alert("you can't afford that!")
        return 0;
    }

    let a = parseInt(prompt("Select number [1 - 6]"))
    



    let dice = Math.floor(Math.random() * 6 ) + 1



    if(dice == a){
        document.getElementById('result').innerHTML = 'the coin landed on... <br> ' + dice + '<br><br> You win!';
        totalCount = totalCount + (6 * b)
    }
    else{
        document.getElementById('result').innerHTML = 'the coin landed on... <br> ' + dice + '<br><br> You lose!';
        totalCount -= b
    }
    document.getElementById("pixels").innerHTML = "pixels: " + totalCount;
    console.log(totalCount)
}
