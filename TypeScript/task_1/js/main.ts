// Define the Teacher interface
interface Teacher {
    // Define readonly firstName, lastName
    readonly firstName: string;
    readonly lastName: string;

    // Define fullTimeEmployee, yearsOfExperience, location
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;

    // Add index signature for dynamic properties
    [key: string]: any;
}

// Create a teacher object
const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false
};

// Log the teacher object
console.log(teacher3);

// Define the Directors interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Create a director object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// Log the director object
console.log(director1);

// Keep Teacher and Directors interfaces, teacher3, director1 from Tasks 1-2

// Define the printTeacherFunction interface
interface printTeacherFunction {
    // TODO: Define function signature
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    // TODO: Return first letter of firstName + ". " + lastName
};

// Test the function
console.log(printTeacher("John", "Doe")); // Should print: J. Doe