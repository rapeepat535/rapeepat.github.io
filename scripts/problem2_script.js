const inputNum = [];
let sum = 0;
let counter = 0;
prob_2()

function prob_2() {
    while (true)
    {
        let num = prompt("Enter a positive integer (a negative integer to quit)");
        if (num === "") {
            continue;
        } else {
            num = Number(num);
            if (Number.isInteger(num) == false) {
                alert("input is " + num);
                alert("Not an integer");
                continue;
            } else if (num < 0) {
                if (inputNum.length == 0) {
                    alert("For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0");
                break;
                } else {
                    alert("For the list " + inputNum + ", the average is " + (sum/counter).toFixed(2) + ", the minimum is " + Math.min(...inputNum) + 
                    ", and the maximum is " + Math.max(...inputNum) );
                break;
                }
            } else {
                inputNum.push(num);
                alert(inputNum);
                sum = sum + num
                counter = counter + 1
            }
        }
        
    }
}


