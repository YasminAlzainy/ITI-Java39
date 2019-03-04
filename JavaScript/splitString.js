function split() {

    var text = document.getElementById("text").value;
    var splitor = document.getElementById("splitor").value;

    var splitedResult = text.split(splitor);



    document.write("The sentence splited: ");
    document.write("</br>");
    document.write("Last occurence located at index: ");

    for (let index = 0; index < splitedResult.length; index++) {
        document.write(splitedResult[index]);
        document.write("</br>");

    }

    var firstChars = text.substring(0, 10);
    document.write("First 10 chatacters is : " + firstChars);
    document.write("</br>");
}

document.getElementById("submit").onclick = split;


