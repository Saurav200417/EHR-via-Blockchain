const users = [
    { username: "admin", password: "admin", role: "admin" },
];

let patients = [];

function showPopup(message) {
    const popup = document.getElementById("success-popup");
    popup.textContent = message;
    popup.classList.remove("hidden");
    setTimeout(() => popup.classList.add("hidden"), 2000);
}

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        showPopup("Login Successful!");
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("admin-container").classList.remove("hidden");
        displayPatients();
    } else {
        document.getElementById("login-message").textContent = "Invalid username or password.";
    }
}

function logout() {
    document.getElementById("login-container").classList.remove("hidden");
    document.getElementById("admin-container").classList.add("hidden");
    document.getElementById("file-cid-container").classList.add("hidden");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    showPopup("Logged out successfully!");
}

document.getElementById("patient-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const pdfInput = document.getElementById("patient-pdf");
    const pdfFile = pdfInput.files[0];

    const newPatient = {
        id: document.getElementById("patient-id").value.trim(),
        name: document.getElementById("patient-name").value.trim(),
        age: parseInt(document.getElementById("patient-age").value),
        gender: document.getElementById("patient-gender").value,
        diagnosis: document.getElementById("patient-diagnosis").value.trim(),
        medication: document.getElementById("patient-medication").value.trim(),
        admissionDate: document.getElementById("admission-date").value,
        dischargeDate: document.getElementById("discharge-date").value,
        hospital: document.getElementById("hospital").value.trim(),
        pdf: pdfFile ? URL.createObjectURL(pdfFile) : null,
    };

    patients.push(newPatient);
    displayPatients();
    displayFileCIDTable();
    e.target.reset();
    showPopup("Patient added successfully!");
});

const users = [
    { username: "admin", password: "admin", role: "admin" },
];

let patients = [];

function showPopup(message) {
    const popup = document.getElementById("success-popup");
    popup.textContent = message;
    popup.classList.remove("hidden");
    setTimeout(() => popup.classList.add("hidden"), 2000);
}

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        showPopup("Login Successful!");
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("admin-container").classList.remove("hidden");
        displayPatients();
    } else {
        document.getElementById("login-message").textContent = "Invalid username or password.";
    }
}

function logout() {
    document.getElementById("login-container").classList.remove("hidden");
    document.getElementById("admin-container").classList.add("hidden");
    document.getElementById("file-cid-container").classList.add("hidden");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    showPopup("Logged out successfully!");
}

// Update this part of index.js to save patients in localStorage
document.getElementById("patient-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const pdfInput = document.getElementById("patient-pdf");
    const pdfFile = pdfInput.files[0];

    const newPatient = {
        id: document.getElementById("patient-id").value.trim(),
        name: document.getElementById("patient-name").value.trim(),
        age: parseInt(document.getElementById("patient-age").value),
        gender: document.getElementById("patient-gender").value,
        diagnosis: document.getElementById("patient-diagnosis").value.trim(),
        medication: document.getElementById("patient-medication").value.trim(),
        admissionDate: document.getElementById("admission-date").value,
        dischargeDate: document.getElementById("discharge-date").value,
        hospital: document.getElementById("hospital").value.trim(),
        pdf: pdfFile ? URL.createObjectURL(pdfFile) : null,
    };

    patients.push(newPatient);

    // Save the updated list of patients to localStorage
    localStorage.setItem("patients", JSON.stringify(patients));

    displayPatients();
    displayFileCIDTable();
    e.target.reset();
    showPopup("Patient added successfully!");
});



function displayFileCIDTable() {
    const tbody = document.getElementById("file-cid-table").querySelector("tbody");
    tbody.innerHTML = "";

    patients.forEach(patient => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.pdf ? `<a href="${patient.pdf}" target="_blank">View File</a>` : "No CID"}</td>
        `;
        tbody.appendChild(row);
    });
}

function showFileCIDTable() {
    document.getElementById("admin-container").classList.add("hidden");
    document.getElementById("file-cid-container").classList.remove("hidden");
}

function hideFileCIDTable() {
    document.getElementById("file-cid-container").classList.add("hidden");
    document.getElementById("admin-container").classList.remove("hidden");
}


function displayFileCIDTable() {
    const tbody = document.getElementById("file-cid-table").querySelector("tbody");
    tbody.innerHTML = "";

    patients.forEach(patient => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.pdf ? `<a href="${patient.pdf}" target="_blank">View File</a>` : "No CID"}</td>
        `;
        tbody.appendChild(row);
    });
}

function showFileCIDTable() {
    document.getElementById("admin-container").classList.add("hidden");
    document.getElementById("file-cid-container").classList.remove("hidden");
}

function hideFileCIDTable() {
    document.getElementById("file-cid-container").classList.add("hidden");
    document.getElementById("admin-container").classList.remove("hidden");
}
