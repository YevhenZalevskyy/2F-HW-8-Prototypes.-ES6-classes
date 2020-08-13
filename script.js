// #1
class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
  }
  // #2
  getInfo() {
    return `Студент ${this.course}-го курсу ${this.university} ${this.fullName}`
  }
}


const student = new Student(`КВІРТУ ППО`, `2`, `Tomas Schwarz`)
console.log(student.getInfo());
