const display = document.getElementById("display");
const form = document.getElementById("calc-box");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
//This variable represents the element containing the current and previous operand elements
//This var can be calculated as whole to get the answer
let current = document.getElementById('current-operand');
const previous = document.getElementById('previous-operand');

let is_operator = false;
numberButtons.forEach((btn) => {    
    btn.addEventListener('click', (e)=>{
        //let last_item = display.value.length-1;
        const res = /\.(\.|\d+\.+)/;
        //console.log(res)
        if(display.value ==="0"){
        display.value = e.target.value;
        }
        else if(is_operator){
            is_operator = false;
            display.value = display.value + e.target.value;
        }
        //(0.00 + 0.0 - 0)if display includes decimal and spaces
        //add the target (.)

        //(0.00) if display.value includes a decimal and display.value does not include spaces
        //replace the event with empty
        else if(display.value.includes(".")){
            display.value = display.value + e.target.value;

            let arr = display.value.split('');
            //let i =0;
            //while (i <= arr.length){
           // for(let i =1; i < arr.length; i++){
           // let d_index = arr[arr.indexOf('.')];
           
           // console.log(arr)
            //console.log(res.test(arr.join('')))
            
            if(res.test(arr.join(''))){
                //console.log(arr[arr.indexOf('.')+1])
                
                display.value = display.value.slice(0, -1);
            }
            
        //}


        }
        /*
        else if(display.value.includes(".") && !display.value.includes(" ")){
            display.value = display.value + e.target.value.replace(".", "");
        }*/
        else {
            display.value = display.value + e.target.value;
            //console.log(last_item);
        }
        
    })
});
let equation =[];

//for each operator
//if [""].includes(last_item) diplay.value =display.value
    //previtem = display.value
//else add target to display
//previtem = display.value
//display.value = display.value + target


operatorButtons.forEach((btn)=> {
    btn.addEventListener('click', (e)=>{
        const op = e.target.value;
        //console.log(op);
        const rel = /\-(\-, \/, \*, \+)?/;
        
        ///(\-(\*|\/))/;
        ///(\-\d+|\-?\-?\d+)/
        

                switch(e.target.value) {
                    case "clear":
                        display.value = '0';
                    break;
                    case "back":
                        display.value = display.value.slice(0, -1);
                    break;
                    case '=':
                        equation.push(display.value);
                        display.value = eval(display.value);
                        equation =[];
                    break;
                    
                    case '-':
                        let arr = display.value.split('');
                        if(display.value === "0"){
                           display.value = e.target.value;
                        }
                        
                        else if(display.value.includes("-")){
                            display.value =  display.value + e.target.value;
                            console.log(rel.test(arr.join('')));

                            if(rel.test(arr.join(''))){
                            //["-"].includes(display.value[display.value.length-1]
                            
                            display.value = display.value.slice(0, 2);
                            //display.value = display.value + e.target.value;

                            //display.value = display.value + e.target.value;
                            //console.log(rel.test(arr.join('')));
                            }
                        }
                        
                        else {
                            display.value = display.value + e.target.value;
                        }
                    
                        break;
                        /*
                        case '*':
                        let timesArr = display.value.split('');
                        if(display.value === "0"){
                           display.value = e.target.value;
                        }
                        
                        else if(display.value.includes("*", "/", "+")){
                            display.value =  display.value + e.target.value;
                            console.log(rel.test(timesArr.join('')));

                            if(rel.test(timesArr.join(''))){
                            //["-"].includes(display.value[display.value.length-1]
                            
                            display.value = display.value.slice(0, 2);
                            //display.value = display.value + e.target.value;

                            //display.value = display.value + e.target.value;
                            //console.log(rel.test(arr.join('')));
                            }
                        }
                        
                        else {
                            display.value = display.value + e.target.value;
                        }
                    
                        break;
                        */
                    default:
                        
                        let last_item = display.value[display.value.length-1];
                        let newArr = display.value.split(' ');
                        if(["-", "*", "/", "+"].includes(last_item) && is_operator){
                            //
                            //display.value = display.value + e.target.value;

                            //equation.pop();
                            //equation.push(e.target.value);
                            if(rel.test(newArr.join(''))){
                                display.value = display.value.slice(0, -1);
                            }
                            console.log(equation.join(' '))
                            console.log(display.value[display.value.length -1])
                            //display.value = display.value + e.target.value;
                                display.value = display.value.replace(/.$/, e.target.value);

                        }
                        else {
                            if(display.value === "0"){
                                display.value= display.value;
                            }
                            else {
                           // equation.push(display.value);
                           // equation.push(e.target.value);
                            display.value = display.value + e.target.value ;
                            //console.log(equation )                        
                            }
                        }
                        is_operator = true;
                        break;
                        /*
        if(!display.value.includes(op)){
            is_operator = true;
            display.value = display.value + op;
        }
        else if(is_operator){
            display.value = display.value+  op;

        }
    
        else {
            display.value = display.value + op;
        }
    })*/
}
    })
    });
/******THIS IS OUR CODE TO ADD KEYBOARD FUNCTIONALITY TO OUR CALCULATOR******/

//here we are adding an eventlistener to the window
window.addEventListener("keydown", (event) => {
    //the eventlistenter is waiting for keyboard input after which an event will take place
        let displayRegex = /^\d+|[*|+|-|/|.|(|)]/g;
        let result = event.key.match(displayRegex);
    //here we are using a switch statement to update our display depending on the key value of the event 
        switch(event.key){
            case "+":
                display.value += current.innerText + event.key;
                break; 
            case "-":
                display.value += current.innerText + event.key;
                break; 
            case "/":
                display.value += current.innerText + event.key;
                break; 
            case "*":
                display.value += current.innerText + event.key;
                break;  
            case "Enter":
                display.value = eval(display.value);
            break;
            case "=":
                display.value = eval(display.value);
            break;
            
            case "Backspace":
                if (display.value){
                display.value = display.value.slice(0, -1);
                } 
            break;
            case "c":
                display.value ='';
                current.innerText = '';
            break;
            default:
                if (result) {
                    display.value += event.key;
                }
            
    
        }
    }, true);
    