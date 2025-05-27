// Define the Student interface
interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

// Create student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Melbourne"
};
const student2: Student = {
    firstName: "Peter",
    lastName: "Lee",
    age: 25,
    location: "Sydney"
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Function to render table
function renderTable() {
    // Create table element
    const table = document.createElement('table');

    // Iterate over studentsList and append rows
    studentsList.forEach(student => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = student.firstName;
        const cell2 = document.createElement('td');
        cell2.textContent = student.location;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });

    document.body.appendChild(table);
}

// Call renderTable when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderTable);