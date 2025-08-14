class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class student {
    constructor(name, age, grade) {
        this.grade = grade;

    }
}

class teacher {
    constructor(name, age, subject) {

        this.subject = subject;
    }
}