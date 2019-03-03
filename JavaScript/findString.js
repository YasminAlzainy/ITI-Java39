function findString() {

    var text = document.getElementById("text").value;
    var strSearch = document.getElementById("strSearch").value;
    var index = document.getElementById("index").value;

    var firstIndex = text.indexOf(text);
    var lastIndex = text.lastIndexOf(text);
    var firstFromIndex = text.indexOf(text, index);
    var lastFromIndex = text.indexOf(text, index);


    document.write("First occurence located at index: " + firstIndex) + "\n";
    document.write("Last occurence located at index: " + lastIndex + "\n");
    document.write("First occurence from your index located at index: " + firstFromIndex + "\n");
    document.write("Last occurence from your index located at index: " + lastFromIndex) + "\n";
}

document.getElementById("submit").onclick = findString;


