class person extends person {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am a ${this.grade}.`);
    }
}

class student extends person {
    constructor(name, age, grade) {
        super(name, age, grade);
    }
}

class teacher extends person {
    constructor(name, age, subject) {
        super(name, age, subject);
        this.subject = subject;
    }
}