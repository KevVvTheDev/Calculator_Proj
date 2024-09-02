
let calculation ={
    firstNum: 0,
    operator: null,
    secondNum: 0,
    result: 0,
    toggle: false
}; // this is to store the calculation in the object


//--------------------- This is for typing a number ---------------------
const numberButton = document.querySelectorAll(".num_btn");

for(let i = 0; i < numberButton.length; i++){
    numberButton[i].addEventListener("click", function(){
        let num = numberButton[i].innerHTML;

        const temp = document.querySelector(".display p").innerHTML;
        const temp2 = document.querySelector(".display h6").innerHTML;

        //this is for the first div on display
        if( temp2.length === 0 || temp2 === "0" && temp.length === 1){
            document.querySelector(".display h6").innerHTML = num;      
            }

        if(temp == "0" && temp.length == 1){//for the main display    
            document.querySelector(".display p").innerHTML = num;
            if(temp2.length > 1){//when pressed the 1st math operator the main display will be 0 and the h6 will add the 2nd num to it string instead
                document.querySelector(".display h6").innerHTML += num;
            }
        }
        else if (!calculation.toggle){ //fault by default
            document.querySelector(".display p").innerHTML += num;
            document.querySelector(".display h6").innerHTML += num;
        }

        else if(calculation.toggle == true){
            document.querySelector(".display p").innerHTML = num;
            if(temp2.length > 1){
                document.querySelector(".display h6").innerHTML += num;
            }
            calculation.toggle = false;
        }
    });
}   

//--------------------- This is for clicking clear btn ---------------------
const clearButton = document.querySelector(".clear"); // reset everything
clearButton.addEventListener("click", function(){
    document.querySelector(".display p").innerHTML = "0";
    document.querySelector(".display h6").innerHTML = "";
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
        document.querySelector(".display h6").innerHTML += ".";
    }
});


//--------------------- This is for clicking fraction btn ---------------------
const fractionButton = document.querySelector(".btn-fraction");
fractionButton.addEventListener("click", function(){
    const temp = document.querySelector(".display p").innerHTML;
    const fractionNum = Number(temp) / 100;
    document.querySelector(".display p").innerHTML = fractionNum;
    document.querySelector(".display h6").innerHTML = fractionNum;
});


//--------------------- This is for clicking plus minus btn ---------------------
const plusMinusButton = document.querySelector(".plus-minus");
plusMinusButton.addEventListener("click", function(){
    const temp = document.querySelector(".display p").innerHTML;
    if(temp.includes("-")){
        document.querySelector(".display p").innerHTML = temp.slice(1);
        document.querySelector(".display h6").innerHTML = temp.slice(1);
    }else {
        document.querySelector(".display p").innerHTML = "-" + temp;
        document.querySelector(".display h6").innerHTML = "-" + temp; //NEED TO FIX THIS
    }

});

//--------------------- This is for math operator btn ---------------------

const operatorButton = document.querySelectorAll(".operator");
for(let i = 0; i < operatorButton.length; i++){
    operatorButton[i].addEventListener("click", function(){

        if(calculation.operator == null){ //for the first calculation
           
            document.querySelector(".display h6").innerHTML += operatorButton[i].innerHTML;
            calculation.operator = operatorButton[i].innerHTML;
            calculation.firstNum = Number(document.querySelector(".display p").innerHTML);
            document.querySelector(".display p").innerHTML = "0";
        }      
        else if(calculation.operator != null){ //for the second calculation when pressed again

            calculation.secondNum = Number(document.querySelector(".display p").innerHTML);
            calculation.result = calculate(calculation.firstNum, calculation.secondNum, calculation.operator);
            document.querySelector(".display p").innerHTML = calculation.result;

            document.querySelector(".display h6").innerHTML =calculation.result + operatorButton[i].innerHTML;

            calculation.firstNum = calculation.result;
            calculation.operator = operatorButton[i].innerHTML; //update the operator
            calculation.result = 0;//reset the result
            calculation.toggle = true;//toggle this to be true when I press another number it will remove the current num on display and replace it with the new one
        }
    });
}

//--------------------- This is for clicking equal btn ---------------------
const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", function(){
    if(calculation.operator == null){
        return;
    }
    calculation.secondNum = Number(document.querySelector(".display p").innerHTML);
    calculation.result = calculate(calculation.firstNum, calculation.secondNum, calculation.operator);
    calculation.operator = null;
    document.querySelector(".display p").innerHTML = calculation.result;
    document.querySelector(".display h6").innerHTML = calculation.result;

});

function calculate(num1, num2, operator){
    if(operator == "+"){
        return num1 + num2;
    }
    else if(operator == "-"){   
        return num1 - num2;
    }
    else if(operator == "x"){
        return num1 * num2;
    }
    else if(operator == "/"){
        if(num2 == 0){
            return "ERRRORRR";
        }
        return num1 / num2;
    }

}