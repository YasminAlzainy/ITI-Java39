function findString() {

    var text = document.getElementById("text").value;
    var strSearch = document.getElementById("strSearch").value;
    var index = document.getElementById("index").value;

    var firstIndex = text.indexOf(strSearch);
    var lastIndex = text.lastIndexOf(strSearch);
    var firstFromIndex = text.indexOf(strSearch, index);
    var lastFromIndex = text.lastIndexOf(strSearch, index);


    document.write("First occurence located at index: " + firstIndex);
    document.write("</br>");
    document.write("Last occurence located at index: " + lastIndex);
    document.write("</br>");
    document.write("First occurence from your index located at index: " + firstFromIndex);
    document.write("</br>");
    document.write("Last occurence from your index located at index: " + lastFromIndex);
}

document.getElementById("submit").onclick = findString;


