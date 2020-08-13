// #1
class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
    this.dismissed;
  }
// #2
  getInfo() {
    return `Студент ${this.course}-го курсу ${this.university} ${this.fullName}`
  }

// #3
  get getMarks(){
    if(this.dismissed){
      return null}
      else{
        return this.marks
    }
  }

// #4
  set getMarks(value) {
    this.getMarks.push(value)
  }

// #5
  getAverageMark() {
    return this.getMarks.reduce((sum, element) =>{
      return  sum + element/this.getMarks.length;
    }, 0);
  }

// #6
  dismiss() {
    this.dismissed = true;
    return this.fullName
  }

// #7
  recover() {
    this.dismissed = false;
    return this.fullName
 }
}

const student = new Student (`КВІРТУ ППО`, `2`, `Tomas Schwarz`)
console.log(student.getInfo())
console.log(student.getMarks)
student.getMarks = 5
console.log(student.getMarks)
console.log(student.getAverageMark())
console.log(student.dismiss(), `is dismissed. Marks:`, student.getMarks)
console.log(student.recover(), `is recovered. Marks:`, student.getMarks)
