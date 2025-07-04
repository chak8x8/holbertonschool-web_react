interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'string') {
        salary = Number(salary);
    }

    if (salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
    // Return true if employee is Director
    return employee instanceof Director;
}

// Execute work function
function executeWork(employee: Director | Teacher): string {
    // Call workDirectorTasks if Director, else workTeacherTasks
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// Test the functions
console.log(executeWork(createEmployee(200))); // Should print: Getting to work
console.log(executeWork(createEmployee(1000))); // Should print: Getting to director tasks

// String literal type
type Subjects = "Math" | "History";

// Teach class function
function teachClass(todayClass: Subjects): string {
    // Return "Teaching Math" or "Teaching History"
    if (todayClass === "Math") {
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
}

// Test the function
console.log(teachClass("Math")); // Should print: Teaching Math
console.log(teachClass("History")); // Should print: Teaching History