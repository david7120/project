let currentUser =
    JSON.parse(
        localStorage.getItem("currentUser")
    );

// PAGE PROTECTION
if (!currentUser) {
    window.location.href =
        "form-validation.html";
}

// DISPLAY USER
document.getElementById("welcome")
    .innerHTML = `
<h1>Thank You For Login 🎉</h1>
<h2>${currentUser.username}</h2>
<p>Have Nice Day ❤️</p>
`;

// LOGOUT
function logout() {
    // localStorage.removeItem(
    //     "currentUser"
    // );
    window.location.href =
        "form-validation.html";
}