// //wap to find greatest num between three numbers.
// let num1 = Number(prompt("enter num1 : "))
// let num2 = Number(prompt("enter num2 : "))
// let num3 = Number(prompt("enter num3 : "))
// let ans;
// ans = num1 > num2 ? num1 : num2;
// ans = ans > num3 ? ans : num3;
// document.write("greatest num : ",ans);

//wap to find greatest num between three numbers.
let num1 = Number(prompt("enter num1 : "))
let num2 = Number(prompt("enter num2 : "))
let num3 = Number(prompt("enter num3 : "))
let ans;
ans = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
document.write("greatest num : ", ans);