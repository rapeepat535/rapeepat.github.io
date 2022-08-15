const primeNum = [];

while (true)
    {
        let num = prompt("Enter a positive integer");
        if (num === "") {
            continue;
        } else {
            num = Number(num);
            if ((Number.isInteger(num) == false) || (num < 0)) {
                continue;
            } else {
                showPrimes(num)
                alert("For n = " + num + " prime numbers are " + primeNum)
                break
            }
        }
        
    }




function showPrimes(num) {
    for (let i =2; i < num; i++) {
        if(!isPrime(i)) continue;
        primeNum.push(i)
    }
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true
}