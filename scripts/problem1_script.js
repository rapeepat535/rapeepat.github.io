const primeNum = [];
while (num < 0 || num == null  || Number.isInteger(num) == false)
    {
        var num = prompt("Enter a positive integer");
        num = Number(num)
    }
    showPrimes(num)
    alert("For n = " + num + " prime numbers are " + primeNum)

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