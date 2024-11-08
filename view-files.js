// Example data for already uploaded files
const uploadedFiles = [
    { fileName: "PatientReport.pdf", fileCID: "QmX...1" },
    { fileName: "LabResults.pdf", fileCID: "QmX...2" },
    { fileName: "MedicalHistory.pdf", fileCID: "QmX...3" }
];

// Function to display the uploaded files in the file list
function displayFiles() {
    const fileList = document.getElementById("file-list");

    // Check if there are any uploaded files
    if (uploadedFiles.length === 0) {
        fileList.innerHTML = "<p>No files uploaded yet.</p>";
        return;
    }

    // Create a list of uploaded files
    uploadedFiles.forEach(file => {
        const fileItem = document.createElement("div");
        fileItem.className = "file-item";
        fileItem.innerHTML = `
            <p><strong>File Name:</strong> ${file.fileName}</p>
            <p><strong>File CID:</strong> ${file.fileCID}</p>
        `;
        fileList.appendChild(fileItem);
    });
}

// Go back to the previous page
function goBack() {
    window.history.back();
}

// Call the display function on page load
window.onload = displayFiles;
