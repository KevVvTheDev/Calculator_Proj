

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

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function(){
    document.querySelector(".display p").innerHTML = "0";
});