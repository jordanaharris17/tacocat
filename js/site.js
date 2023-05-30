//get our user input
function getValue() {
    //make sure the alert is invisible
    document.getElementById("alert").classList.remove("invisible");
    //get user string from the page
    let userString = document.getElementById("userString").value;
    //check for a palindrome
    let returnObj = checkForPalindrome(userString);
    //diplay out message to the screen
    displayMessage(returnObj);
}
//check if string is a palindrome
function checkForPalindrome(userString) {
    userString = userString.toLowerCase();
    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");
    let revString = [];
    let returnObj = {};
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }
    if (revString == userString) {
        returnObj.msg = "Well done! You entered a Palindrome!"
    }
    else {
        returnObj.msg = "Sorry! You did not enter a Palindrome!"
    }
    returnObj.reversed = revString;
    return returnObj;
}
//Display a message to the string
function displayMessage(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}