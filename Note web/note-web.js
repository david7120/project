
function addclick() {

    let title = document.getElementById("text-input").value;
    let content = document.getElementById("text-area").value;


    // condition checking
    if (title === "") {

        document.getElementById("Error").textContent =
            "Please Enter the value";
        return;
    }
    if (content === "") {
        document.getElementById("Error-area").textContent =
            "Please Enter the descriptionath";
        return;
    }

    document.getElementById("Error").textContent = "";
    let addcontent = document.getElementById("add-content");
    let contentCard = document.createElement("div");
    contentCard.classList.add("content-card");

    //  create the innerhtml 
    contentCard.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button class="delete-btn"
        onclick="deleteNote(this)">
            Delete Note
        </button>
    `;

    addcontent.appendChild(contentCard);

    // session storage
    window.sessionStorage.setItem("contentCard", addcontent.innerText);
    console.log(window.sessionStorage.getItem("title"))

    //hidden your notes
    document.getElementById("notes-title").style.display = "block";
    document.getElementById("text-input").value = "";
    document.getElementById("text-area").value = "";
}

function deleteNote(button)
 {
    button.parentElement.remove();

}