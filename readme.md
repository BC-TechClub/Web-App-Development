# Simple Interactive Web Application Guide
by Tech Club Web App Team


### Introduction
Introduction
Welcome to the Simple Interactive Web Application Guide! In this guide, you'll learn how to create a basic interactive web application using HTML and JavaScript. This tutorial is designed for beginners with no prior experience, so don't worry if you're new to web development. By the end of this guide, you'll have a simple web application that allows users to click a button and see a message.

### Prerequisites
Before we begin, make sure you have the following:
* A text editor (e.g., Notepad, Visual Studio Code, Sublime Text)
* web browser (e.g., Chrome, Firefox, Edge)

-----

### Step 1: Setting Up Your Project
Create a new folder on your computer to organize your project files. You can name it anything you like.
Inside the project folder, create two files:
* ‘index.html’ - This will contain your HTML code.
* ‘script.js’ - This will contain your JavaScript code.


### Step 2: Creating the HTML File
Open ‘index.html’ in your text editor and add the following HTML code:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Web App</title>
</head>
<body>
    <h1>Welcome to My Simple Web App</h1>
    <button id="showMessage">Click Me</button>
    <p id="message"></p>
    <script src="script.js"></script>
</body>
</html>
```

This code sets up the basic structure of your web page with a title, a heading, a button, and an empty paragraph where the message will be displayed.

### Step 3: Writing JavaScript
Open the 'script.js' file in your text editor and add the following JavaScript code:

``` javascript
// Get a reference to the button and the message paragraph
const button = document.getElementById('showMessage');
const messageParagraph = document.getElementById('message');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Change the text inside the message paragraph
    messageParagraph.textContent = 'Hello, World!';
});
```

This JavaScript code does the following:
* It retrieves references to the button and the message paragraph using their IDs.
* It adds a click event listener to the button.
* When the button is clicked, it changes the text inside the message paragraph to "Hello, World!"


### Step 4: Testing Your Web Application
1. Save both index.html and script.js files.
2. Open index.html in your web browser by double-clicking on it or right-clicking and selecting "Open with" your browser.
3. You should see your web page with the heading and a button that says "Click Me."
4. Click the "Click Me" button, and you should see the message "Hello, World!" appear below the button.

Congratulations! You've created a simple interactive web application using HTML and JavaScript.
