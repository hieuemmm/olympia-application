class QuestionController {
  // [GET] /draft/HauNT
  questionsList(req, res) {
    res.render("questions/questionList", { title: "Question List" });
  }
  // [GET] /draft/HieuVV
  addSingleQuestion = function (req, res) {
    res.render("questions/addSingleQuestion", { title: "Add Single Question" });
  };
}
module.exports = new QuestionController();
