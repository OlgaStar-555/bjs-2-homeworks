function Student(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
    this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
        this.marks.push(...marks)
    }
}

Student.prototype.getAverage = function () {
    if (this.marks?.length) {
        return this.marks.reduce((accumulator, currentValue) => accumulator + currentValue) / this.marks.length;
    } else {
        return 0
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject
    delete this.marks

    this.excluded = reason
}

const student0 = new Student('Ivan', 'мужской', 25)
const student1 = new Student('Anna', 'женский', 19)
const student2 = new Student('Kesha', 'мужской', 22)

