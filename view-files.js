// Example data for already uploaded files
const uploadedFiles = [
    { fileName: "PatientReport.pdf", fileCID: "QmX...1" },
    { fileName: "LabResults.pdf", fileCID: "QmX...2" },
    { fileName: "MedicalHistory.pdf", fileCID: "QmX...3" }
];
// view-files.js
const patients = JSON.parse(localStorage.getItem("patients")) || [];

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
