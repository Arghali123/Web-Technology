var num = parseInt(prompt("Enter a number"));
console.log(num);

var isPrime = true;

function checkPrime(num) {
    if (num <= 1) {
        return false; // 0 and 1 are not prime
    }

    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false; // not prime
        }
    }
    return true; // prime
}

isPrime = checkPrime(num);

if (isPrime == true) {
    alert("The number is prime: " + num);
} else {
    alert("The number is not prime: " + num);
}
