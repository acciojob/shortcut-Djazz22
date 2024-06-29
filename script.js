function shortcut(str1, str2) {
    // Check if either of the input strings is empty
    if (str1 === '' || str2 === '') {
        return '';
    }
    
    // Return the initial letters of the input strings
    return str1.charAt(0) + str2.charAt(0);
}

document.getElementById('shortcutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var inputStr1 = document.getElementById('inputStr1').value;
    var inputStr2 = document.getElementById('inputStr2').value;
    var result = shortcut(inputStr1, inputStr2);

    document.getElementById('result').innerText = 'Shortcut: ' + result;
});
