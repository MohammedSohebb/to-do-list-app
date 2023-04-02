// Define variables
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const taskTable = document.getElementById("task-table");
const addTaskForm = document.getElementById("add-task-form");
const taskNameInput = document.getElementById("task-name");
const loginLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");
let username = "";

// Display the login form and hide the sign up form
function showLoginForm() {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
}

// Display the sign up form and hide the login form
function showSignupForm() {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
}

// Handle login form submission
function handleLoginFormSubmit(event) {
    event.preventDefault();
    // Get the username and password from the login form
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();
    // Check if the entered username and password are correct
    if (enteredUsername === "user" && enteredPassword === "password") {
        // If the login is successful, store the username and display the add task form and task table
        username = enteredUsername;
        loginForm.reset();
        addTaskForm.style.display = "block";
        taskTable.style.display = "table";
        showTaskList();
    } else {
        // If the login fails, display an error message
        alert("Invalid username or password.");
    }
}

// Handle sign up form submission
function handleSignupFormSubmit(event) {
    event.preventDefault();
    // Get the username and password from the sign up form
    const newUsernameInput = document.getElementById("new-username");
    const newPasswordInput = document.getElementById("new-password");
    const newUsername = newUsernameInput.value.trim();
    const newPassword = newPasswordInput.value.trim();
    // Store the new username and password and display the login form
    username = newUsername;
    signupForm.reset();
    showLoginForm();
    alert("Sign up successful!");
}

// Handle add task form submission
function handleAddTaskFormSubmit(event) {
    event.preventDefault();
    // Get the task name from the add task form
    const taskName = taskNameInput.value.trim();
    // Add the task to the task list
    addTask(taskName);
    // Clear the add task form
    addTaskForm.reset();
}

// Add a new task to the task list
function addTask(taskName) {
    const newRow = taskTable.insertRow(-1);
    const taskNameCell = newRow.insertCell(0);
    const statusCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2);
    taskNameCell.innerText = taskName;
    statusCell.innerText = "Not Done";
    actionCell.innerHTML = `<button class="task-done">Done</button> <button class="task-delete">Delete</button>`;
    // Add event listeners for the Done and Delete buttons
    const doneButton = actionCell.querySelector(".task-done");
    doneButton.addEventListener("click", handleDoneButtonClick);
    const deleteButton = actionCell.querySelector(".task-delete");
    deleteButton.addEventListener("click", handleDeleteButtonClick);
}

// Handle Done button click
function handleDoneButtonClick(event) {
    event.preventDefault();
    const row = event.target.closest("tr");
    row.classList.add("task-done");
    const statusCell = row.querySelector("td:nth-child(2)");
    statusCell.innerText = "Done";
}

// Handle
