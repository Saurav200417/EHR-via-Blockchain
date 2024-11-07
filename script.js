const users = [
    { username: "user1", password: "p" },
    { username: "user2", password: "password456" },
    { username: "admin", password: "a" }
];

const uploadedFiles = []; // Array to hold uploaded files

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = users.find(user => user.username === username && user.password === password);
    const loginMessage = document.getElementById("login-message");

    if (user) {
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

document.getElementById("upload-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const fileName = document.getElementById("file-name").value;
    const cid = document.getElementById("file-cid").value;

    uploadedFiles.push({ fileName, cid }); // Save the uploaded file
    alert(`File "${fileName}" uploaded with CID "${cid}"`);
    event.target.reset();
});

// Function to populate the files table
function populateFilesTable() {
    const filesList = document.getElementById("files-list");
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

// Call populateFilesTable when view-files.html loads
window.onload = function() {
    if (document.getElementById("files-list")) {
        populateFilesTable();
    }
};
