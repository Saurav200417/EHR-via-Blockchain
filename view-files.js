// Example data for already uploaded files (This would be replaced by real data)
const uploadedFiles = [
    { fileName: "PatientReport.pdf", fileCID: "QmX...1" },
    { fileName: "LabResults.pdf", fileCID: "QmX...2" },
    { fileName: "MedicalHistory.pdf", fileCID: "QmX...3" }
];

// Store uploaded files in localStorage if they don't already exist
if (!localStorage.getItem("uploadedFiles")) {
    localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
}

// Function to display the uploaded files in the table
function displayFiles(files) {
    const filesList = document.getElementById("files-list");
    filesList.innerHTML = "";

    files.forEach((file) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${file.fileName}</td>
            <td>${file.fileCID}</td>
            <td><a href="https://ipfs.io/ipfs/${file.fileCID}" target="_blank">View File</a></td>
        `;
        filesList.appendChild(row);
    });
}

// Function to view all files from localStorage
function viewAllFiles() {
    const files = JSON.parse(localStorage.getItem("uploadedFiles"));
    displayFiles(files);
}

// Call the display function on page load (if no files exist, display empty table)
window.onload = () => {
    const files = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    displayFiles(files);
};


// Call the display function on page load
window.onload = displayFiles;

function displayPatients() {
    const tbody = document.getElementById("patient-table").querySelector("tbody");
    tbody.innerHTML = "";

    patients.forEach((patient) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td>${patient.diagnosis}</td>
            <td>${patient.medication}</td>
            <td>${patient.admissionDate}</td>
            <td>${patient.dischargeDate}</td>
            <td>${patient.hospital}</td>
            <td>${patient.pdf ? `<a href="${patient.pdf}" target="_blank">View PDF</a>` : "No PDF"}</td>
        `;
        tbody.appendChild(row);
    });
}

displayPatients();


// Go back to the previous page
function goBack() {
    window.history.back();
}

// Call the display function on page load
window.onload = displayFiles;
