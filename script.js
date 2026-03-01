const form = document.getElementById("complaintForm");
const table = document.getElementById("issuesTable");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const location = document.getElementById("location").value;

    // Dummy AI Priority Score Generator (random)
    const priorityScore = (Math.random() * 10).toFixed(1);

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${title}</td>
        <td>${location}</td>
        <td>${priorityScore}</td>
    `;

    table.appendChild(newRow);

    form.reset();
});