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