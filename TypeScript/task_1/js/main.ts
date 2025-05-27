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

// Define the printTeacherFunction interface
interface printTeacherFunction {
    // Define function signature
    (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    // Return first letter of firstName + ". " + lastName
    const letterOfFirstName = firstName.slice(0, 1);
    return `${letterOfFirstName}. ${lastName}`
};

// Test the function
console.log(printTeacher("John", "Doe")); // Should print: J. Doe


// Interface for constructor
interface StudentConstructor {
    // Define constructor signature
    new(firstName: string, lastName: string): StudentClassInterface;
}

// Interface for class
interface StudentClassInterface {
    // Define workOnHomework and displayName
    workOnHomework(): string;
    displayName(): string;
}

// Define the StudentClass
class StudentClass implements StudentClassInterface {
    // Define properties
    firstName: string;
    lastName: string;

    // Define constructor
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Implement methods
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return `${this.firstName}`;
    }
}

// Test the class
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Should print: John
console.log(student.workOnHomework()); // Should print: Currently working