
let calculation ={
    firstNum: 0,
    operator: null,
    secondNum: 0,
    result: 0
}; // this is to store the calculation in the object

//--------------------- This is for typing a number ---------------------
const numberButton = document.querySelectorAll(".num_btn");

for(let i = 0; i < numberButton.length; i++){
    numberButton[i].addEventListener("click", function(){
        let num = numberButton[i].innerHTML;

        const temp = document.querySelector(".display p").innerHTML;
        if(temp == "0" && temp.length == 1){
            document.querySelector(".display p").innerHTML = num;
        }
        else{
            document.querySelector(".display p").innerHTML += num;
        }
    });
}   

//--------------------- This is for clicking clear btn ---------------------
const clearButton = document.querySelector(".clear"); // this is to clear the display
clearButton.addEventListener("click", function(){
    document.querySelector(".display p").innerHTML = "0";
    calculation.firstNum = 0;
    calculation.operator = null;
    calculation.secondNum = 0;
    calculation.result = 0;
});


//--------------------- This is for clicking dot btn ---------------------
const dotButton = document.querySelector(".btn-dot");
dotButton.addEventListener("click", function(){
    const temp = document.querySelector(".display p").innerHTML;
    if(temp.includes(".")){
        return;
    }
    else{
        document.querySelector(".display p").innerHTML += ".";
    }
});


//--------------------- This is for clicking fraction btn ---------------------
const fractionButton = document.querySelector(".btn-fraction");
fractionButton.addEventListener("click", function(){
    const temp = document.querySelector(".display p").innerHTML;
    const fractionNum = Number(temp) / 100;
    document.querySelector(".display p").innerHTML = fractionNum;
});

//--------------------- This is for clicking plus minus btn ---------------------
const plusMinusButton = document.querySelector(".plus-minus");
plusMinusButton.addEventListener("click", function(){
    const temp = document.querySelector(".display p").innerHTML;
    if(temp.includes("-")){
        document.querySelector(".display p").innerHTML = temp.slice(1);
    }else {
        document.querySelector(".display p").innerHTML = "-" + temp;
    }

});