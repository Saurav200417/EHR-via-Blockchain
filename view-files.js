// Example data for already uploaded files
const uploadedFiles = [
    { fileName: "PatientReport.pdf", fileCID: "QmX...1" },
    { fileName: "LabResults.pdf", fileCID: "QmX...2" },
    { fileName: "MedicalHistory.pdf", fileCID: "QmX...3" }
];
// view-files.js
const patients = JSON.parse(localStorage.getItem("patients")) || [];
// Example data for already uploaded files (can be replaced with real data from a backend or local storage)
const uploadedFiles = [
    { fileName: "PatientReport.pdf", fileCID: "QmX...1" },
    { fileName: "LabResults.pdf", fileCID: "QmX...2" },
    { fileName: "MedicalHistory.pdf", fileCID: "QmX...3" }
];

// Function to display the uploaded files in the table
function displayFiles() {
    const filesList = document.getElementById("files-list");
    filesList.innerHTML = "";

    uploadedFiles.forEach((file) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${file.fileName}</td>
            <td>${file.fileCID}</td>
            <td><a href="https://ipfs.io/ipfs/${file.fileCID}" target="_blank">View File</a></td>
        `;
        filesList.appendChild(row);
    });
}

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
