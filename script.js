document.getElementById("check-btn").addEventListener("click", function() {
    const inputField = document.getElementById("text-input");
    const resultDiv = document.getElementById("result");
    const inputText = inputField.value.trim(); // Get the input text and remove any leading/trailing spaces

    if (inputText === "") {
        alert("Please input a value");
        return;
    }

    const cleanedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove all non-alphanumeric characters and convert to lowercase
    const reversedText = cleanedText.split("").reverse().join(""); // Reverse the cleaned text

    if (cleanedText === reversedText) {
        resultDiv.textContent = `${inputText} is a palindrome`;
    } else {
        resultDiv.textContent = `${inputText} is not a palindrome`;
    }
   
});

