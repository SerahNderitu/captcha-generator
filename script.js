
<script>
        // Selecting DOM elements
        const captchaTextBox = document.querySelector(".captcha_box input");
        const refreshButton = document.querySelector(".refresh_button");
        const captchaInputBox = document.querySelector(".captcha_input input");
        const message = document.querySelector(".message");
        const submitButton = document.querySelector(".button");
        
        // Variable to store generated captcha
        let captchaText = null;
        
        //Function to generate captcha
        const generateCaptcha = () => {
            const randomString = Math.random().toString(36).substring(2, 7); // produce a random alphanumeric string with 5 characters
            const randomStringArray = randomString.split(""); // split the random string into an array of individual characters
            const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char)); // iterates over each character in randomStringArray. For each character, randomly convert to uppercase (with a 50% chance) or keep it as it is. This creates a new array of characters with some characters in uppercase and some in lowercase.
            captchaText = changeString.join("  "); // combine the characters into a single string with double spaces between each character
            captchaTextBox.value = captchaText;
            console.log(captchaText);
        };
        
        const refreshBtnClick = () => {  // Generate a new captcha
            generateCaptcha();
            captchaInputBox.value = ""; // clear the captcha input box
            captchaKeyUpValidate();
        };
        
        const captchaKeyUpValidate = () => {
            // Toggle submit button disable class based on captcha input field
            submitButton.classList.toggle("disabled", !captchaInputBox.value); // if no value entered, disable submit button
            
            if (!captchaInputBox.value) message.classList.remove("active");  //  when there is no input, hide the error message 
        };
        
        // Function to validate the entered captcha
        const submitBtnClick = () => {
            captchaText = captchaText
                .split("")  // split the captchaText string into an array of characters
                .filter((char) => char !== " ") // remove all elements that are equal to a space character.
                .join("");  // join back together the filtered array into a single string with no spaces
            message.classList.add("active"); // Use CSS class "active" to control the visibility and styling of the message
            
            // Check if the entered captcha text is correct or not
            
            if (captchaInputBox.value === captchaText) {
                message.innerText = "Entered captcha is correct";
                message.style.color = "#826afb";
            } else {
                message.innerText = "Entered captcha is incorrect";
                message.style.color = "#ff2525";
            }  
         };
        
        // Event listenersfor the refresh button, captchaInputBox, submit button
        
        refreshButton.addEventListener("click", refreshBtnClick);
        captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
        submitButton.addEventListener("click", submitBtnClick);
        
        // Generate a captcha when the page loads
        
        generateCaptcha();
    
    </script>
