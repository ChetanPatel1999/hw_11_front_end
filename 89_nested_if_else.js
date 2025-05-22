//wap to find greatest num between threee number without using logical and operator.
let num1, num2, num3;
num1 = 121, num2 = 7888, num3 = 900;
if (num1 > num2) {
    if (num1 > num3) {
        console.log("greatest num : ", num1);
    }
    else {
        console.log("greatest num : ", num3);
    }
}
else {
    if (num2 > num3) {
        console.log("greatest num : ", num2);
    }
    else {
        console.log("greatest num : ", num3);
    }
}