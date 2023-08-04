function cloudFun() {
    let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
    let wordCloudLength = wordCloud.length;
    let wordsContainer = document.getElementById("wordsContainer");
    let paraElement = document.getElementById("errorMsg");
    let count = 0;
    for (let item of wordCloud) {
        let spanElement = document.createElement("span");
        spanElement.style.fontSize = Math.floor(Math.random() * 40) + "px";
        spanElement.textContent = item;
        spanElement.classList.add("m-3");
        wordsContainer.appendChild(spanElement);
    }
}

function addBtn() {
    let spanElement = document.createElement("span");
    let inputElement = document.getElementById("userInput");
    let inputElementValue = inputElement.value;
    spanElement.classList.add("m-3");
    spanElement.style.fontSize = Math.floor(Math.random() * 40) + "px";
    let wordsContainer = document.getElementById("wordsContainer");
    let paraElement = document.getElementById("errorMsg");
    if (inputElementValue !== "") {
        spanElement.textContent = inputElementValue;
        wordsContainer.appendChild(spanElement);
        inputElement.value = "";
    } else {
        paraElement.textContent = "Please enter a word";
    }

}
