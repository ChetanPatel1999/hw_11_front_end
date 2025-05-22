//wap to print assending order of given three number.
let num1, num2, num3;
num1 = 121, num2 = 78, num3 = 900;
if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log("dessending order :", num1, num2, num3);
        console.log("assending order :", num3, num2, num1);
    }
    else {
        console.log("dessending order :", num1, num3, num2);
        console.log("assending order :", num2, num3, num1);
    }
}
else if (num2 > num3) {

    if (num1 > num3) {
        console.log("dessending order :", num2, num1, num3);
        console.log("assending order :", num3, num1, num2);
    }
    else {
        console.log("dessending order :", num2, num3, num1);
        console.log("assending order :", num1, num3, num2);
    }
}
else {
    if (num1 > num2) {
        console.log("dessending order :", num3, num1, num2);
        console.log("assending order :", num2, num1, num3);
    }
    else {
        console.log("dessending order :", num3, num2, num1);
        console.log("assending order :", num1, num2, num3);
    }
}