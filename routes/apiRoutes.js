const {studentArray, Student} = require('../data/students')

module.exports = function (app) {
  app.get("/api/student", function (req, res) {
    return res.json(studentArray)
  })

  app.post("/api/student", function (req, res) {
    const b = req.body;

    if (Object.keys(b).length) {
      if (!b.name || !b.age || (b.grade !== null && b.grade !== undefined)) {
        return res.status(422).json(b) 
      }

      const newStudent = new Student(b.name, b.age, b.grade);
      studentArray.push(newStudent)
      return res.json(newStudent)
    }

    return res.status(422).send('Bad post')
  })
}