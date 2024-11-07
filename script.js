const users = [
    { username: "user1", password: "p" },
    { username: "user2", password: "p" },
    { username: "admin", password: "a" }
];

const uploadedFiles = []; // Array to hold uploaded files

function showPopup(message) {
    const popup = document.getElementById("success-popup");
    const popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;
    popup.classList.remove("hidden");

    setTimeout(() => {
        popup.classList.add("hidden");
    }, 2000);
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = users.find(user => user.username === username && user.password === password);
    const loginMessage = document.getElementById("login-message");

    if (user) {
        showPopup("Login Successful!");
        loginMessage.textContent = "";

        if (user.username === "admin") {
            document.getElementById("admin-container").classList.remove("hidden");
        } else {
            document.getElementById("user-container").classList.remove("hidden");
        }
        document.getElementById("login-container").classList.add("hidden");
    } else {
        loginMessage.textContent = "Invalid username or password.";
        loginMessage.style.color = "red";
    }
}

function logout() {
    document.getElementById("login-container").classList.remove("hidden");
    document.getElementById("admin-container").classList.add("hidden");
    document.getElementById("user-container").classList.add("hidden");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("login-message").textContent = "";
}

document.getElementById("upload-form-admin").addEventListener("submit", (event) => {
    event.preventDefault();
    const fileName = document.getElementById("file-name-admin").value;
    const cid = document.getElementById("file-cid-admin").value;

    uploadedFiles.push({ fileName, cid });
    showPopup(`File "${fileName}" uploaded successfully!`);
    event.target.reset();
});

document.getElementById("upload-form-user").addEventListener("submit", (event) => {
    event.preventDefault();
    const fileName = document.getElementById("file-name-user").value;
    const cid = document.getElementById("file-cid-user").value;

    uploadedFiles.push({ fileName, cid });
    showPopup(`File "${fileName}" uploaded successfully!`);
    event.target.reset();
});

function populateFilesTable() {
    const filesList = document.getElementById("files-list");
    filesList.innerHTML = "";
    uploadedFiles.forEach(file => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${file.fileName}</td>
            <td>${file.cid}</td>
            <td><button onclick="deleteFile('${file.cid}')">Delete</button></td>
        `;
        filesList.appendChild(row);
    });
}

window.onload = function() {
    if (document.getElementById("files-list")) {
        populateFilesTable();
    }
};
