var flag = true;

while (flag) {
    var userNum = prompt("Enter 1 (bullet) or 2(Numbers) or 3(Letters) please! ^_^", "1");

    if (userNum == 1) {

        first();
        flag = false;

    }
    else if (userNum == 2) {

        second();
        flag = false;
    }
    else if (userNum == 3) {

        thired();
        flag = false;
    }
    else {
        alert("PLEASE ENTER 1 or 2 or 3 only 0_0");
    }
}

function first() {
    document.write("  <ul> <h1> Bullet List</h1> <li> ^_^</li> <li> *_*</li> <li> 0_0</li> </ul > ");
}

function second() {
    document.write("  <ol> <h1> Ordered List : Number</h1> <li> ^_^</li> <li> *_*</li> <li> 0_0</li> </ol > ");
}

function thired() {
    document.write("  <ol type = 'A'> <h1> Ordered List : Letters</h1> <li> ^_^</li> <li> *_*</li> <li> 0_0</li> </ol > ");
}