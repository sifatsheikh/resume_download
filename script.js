// document.getElementById("downloadBtn").addEventListener("click", async function () {
//     const { jsPDF } = window.jspdf;

//     // Create a new PDF document
//     const doc = new jsPDF();

//     // Get user inputs
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const contact = document.getElementById("contact").value;
//     const qualification = document.getElementById("qualification").value;
//     const skills = document.getElementById("skills").value;
//     const hobbies = document.getElementById("hobbies").value;

//     // Add title
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(18);
//     doc.text("Professional Resume", 105, 20, { align: "center" });

//     // Add uploaded photo (if available)
//     const photoInput = document.getElementById("photo");
//     if (photoInput.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             const imgData = e.target.result;
//             doc.addImage(imgData, "JPEG", 160, 30, 40, 40); // Position: top-right
//             addContent();
//         };
//         reader.readAsDataURL(photoInput.files[0]);
//     } else {
//         addContent();
//     }

//     function addContent() {
//         // Add name
//         doc.setFontSize(14);
//         doc.setFont("helvetica", "normal");
//         doc.text(`Name: ${name}`, 20, 40);

//         // Add email and contact
//         doc.text(`Email: ${email}`, 20, 50);
//         doc.text(`Contact: ${contact}`, 20, 60);

//         // Add section headers
//         doc.setFont("helvetica", "bold");
//         doc.text("Academic Qualification:", 20, 80);
//         doc.setFont("helvetica", "normal");
//         doc.text(qualification, 20, 90, { maxWidth: 170 });

//         doc.setFont("helvetica", "bold");
//         doc.text("Skills:", 20, 110);
//         doc.setFont("helvetica", "normal");
//         doc.text(skills, 20, 120);

//         doc.setFont("helvetica", "bold");
//         doc.text("Hobbies:", 20, 140);
//         doc.setFont("helvetica", "normal");
//         doc.text(hobbies, 20, 150);

//         // Save the PDF
//         doc.save("resume.pdf");
//     }
// });
