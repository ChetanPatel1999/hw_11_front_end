//wap to find greatest num between four number without using logical and operator.
let num1, num2, num3;
num1 = 121, num2 = 7888, num3 = 900, num4 = 6436546;
if (num1 > num2) {
    if (num1 > num3) {
        if (num1 > num4) {
            console.log("greatest num : ", num1);
        }
        else {
            console.log("greatest num : ", num4);
        }
    }
    else {
        if (num3 > num4) {
            console.log("greatest num : ", num3);
        }
        else {
            console.log("greatest num : ", num4);
        }
    }
}
else {
    if (num2 > num3) {
        if (num2 > num4) {
            console.log("greatest num : ", num2);
        }
        else {
            console.log("greatest num : ", num4);
        }
    }
    else {
        if (num3 > num4) {
            console.log("greatest num : ", num3);
        }
        else {
            console.log("greatest num : ", num4);
        }
    }
}