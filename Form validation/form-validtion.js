let loginBox = document.getElementById("login-box");
let signupBox = document.getElementById("signup-box");
let title = document.getElementById("title");
let message = document.getElementById("message");


function showSignup() {
    loginBox.style.display = "none";
    signupBox.style.display = "block";
    title.textContent = "Signup";
    message.textContent = "";
}

function showLogin() {
    signupBox.style.display = "none";
    loginBox.style.display = "block";
    title.textContent = "Login";
    message.textContent = "";
}
// LOGIN ENTER KEY
document.getElementById("login-password")
    .addEventListener("keypress", (event) => {

        if (event.key === "Enter") {
            event.preventDefault();
            loginUser();
        }
    });


// SIGNUP ENTER KEY
document.getElementById("signup-password")
    .addEventListener("keypress", (event) => {

        if (event.key === "Enter") {
            event.preventDefault();
            signupUser();
        }
    });

    // use in Axios POST
async function signupUser() {
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (
        username === "" ||
        email === "" ||
        password === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields";
        return;
    }
    let userData = {
        username: username,
        email: email,
        password: password
    };
    try {
        await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            userData
        );
        let users =
            JSON.parse(
                localStorage.getItem("users")
            ) || [];

        users.push(userData);

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );
        message.style.color = "lime";
        message.textContent = "Signup Success 🎉";
        document.getElementById("signup-username").value = "";
        document.getElementById("signup-email").value = "";
        document.getElementById("signup-password").value = "";
        setTimeout(() => {
            showLogin();
        }, 1000);
    }
    catch (error) {
        console.log(error);
    }
}

// USE IN AXIOS GET 
async function loginUser() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    if (
        email === "" ||
        password === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields";
        return;
    }
    try {
        await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        let users =
            JSON.parse(
                localStorage.getItem("users")
            ) || [];
        let validUser =
            users.find((user) => {

                return (
                    user.email === email &&
                    user.password === password
                );
            });
        if (validUser) {
            message.style.color = "lime";
            message.textContent = "Login Success 🚀";
            localStorage.setItem("currentUser",
                JSON.stringify(validUser)
            );
            window.location.href = "home.html";
        }
        else {
            message.style.color = "red";
            message.textContent =
                "Invalid Email or Password";
        }
    }
    catch (error) {

        console.log(error);
    }
}
