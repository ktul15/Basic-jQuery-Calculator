$(document).ready(function(){
    //Stores the inputs from the user to calculate later
    var inputs = [""];

    //String to store current input string
    var totalString;

    //Operators array for validation without the '.'
    var operators1 = ["+", "-", "/", "*"];

    //Operators array with '.'
    var operators2 = ["."];

    //Numbers for validation
    var nums = [0,1,2,3,4,5,6,7,8,9];

    function getValue(input){
        if(operators2.includes(inputs[inputs.length-1]) === true && input === "."){
            console.log("Duplicate '.' ");
        } 
        //Validation so it doesn't start with an operator
        else if(inputs.length === 1 && operators1.includes(input) === false){
            inputs.push(input);
            console.log("operator")
        } 
        //If last character was not an operator, add operator to the array
        else if(operators1.includes(inputs[inputs.length - 1]) === false){
            inputs.push(input);
        } 
        else if(nums.includes(Number(input))){
            inputs.push(input);
        }
        update();
    }

    function update(){
        totalString = inputs.join("");
        $("#steps").html(totalString);
    }

    function getTotal(){   
        totalString = inputs.join("");
        $("#steps").html(eval(totalString));
        inputs = [""];
    }

    $("button").on("click", function(){
        if(this.id === "deleteAll"){
            inputs = [""];
            update();
            console.log(inputs);

        } else if(this.id === "backOne"){
            if(inputs.length !== 1){
                inputs.pop();
            }
            update();
            console.log(inputs);

        } else if(this.id === "total"){
            getTotal();
            console.log(inputs);

        } else{

            if(inputs[inputs.length - 1].indexOf("+", "-", "/", "*", ".") === -1){
                getValue(this.id);
                console.log(inputs);
            } else{
                getValue(this.id);
                console.log(inputs);

            }
        }
    }); 
});