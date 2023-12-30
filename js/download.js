document.getElementById("downloadButton").addEventListener("click", () => {
  const pdf = new jsPDF();
  pdf.text("Hello, this is your PDF content.", 10, 10);
  pdf.save("downloaded.pdf");
});
