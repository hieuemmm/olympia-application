class QuestionController {
  // [GET] /draft/HauNT
  questionsList(req, res) {
    res.render("questions/questionList", {
      title: "Question List",
      user: req.user,
    });
  }
  // [GET] /draft/HieuVV
  addSingleQuestion = function (req, res) {
    res.render("questions/addSingleQuestion", {
      title: "Add Single Question",
      user: req.user,
    });
  };
}
module.exports = new QuestionController();
