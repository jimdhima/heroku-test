const studentArray = [];
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

module.exports = {
  studentArray,
  Student
};