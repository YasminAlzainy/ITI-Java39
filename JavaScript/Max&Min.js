var userFirstNum = prompt("Enter First Number ^_^", "1");
var userSecondNum = prompt("Enter Second Number ^_^", "2");
var userThiredNum = prompt("Enter Thired Number ^_^", "3");


if (isNaN(userFirstNum)) {
    alert("PLEASE ENTER NUMBERS ONLY 0_0");
    userFirstNum = prompt("Enter First Number ^_^", "1");
}

if (isNaN(userSecondNum)) {
    alert("PLEASE ENTER NUMBERS ONLY 0_0");
    userSecondNum = prompt("Enter Second Number ^_^", "2");
}

if (isNaN(userThiredNum)) {
    alert("PLEASE ENTER NUMBERS ONLY 0_0");
    userThiredNum = prompt("Enter Thired Number ^_^", "3");
}


var maxNum = Math.max(userFirstNum, userSecondNum, userThiredNum);
var minNum = Math.min(userFirstNum, userSecondNum, userThiredNum);


document.getElementById("firstNum").after(userFirstNum);
document.getElementById("secondNum").after(userSecondNum);
document.getElementById("thiredNum").after(userThiredNum);
document.getElementById("max").after(maxNum);
document.getElementById("min").after(minNum);