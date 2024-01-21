const authRouter = require("./authRouter");
const draftRouter = require("./draftRouter");
const siteRouter = require("./siteRouter");
const questionRouter = require("./questionRouter");
function routes(app) {
  app.use("/auth", authRouter);
  app.use("/draft", draftRouter);
  app.use("/question", questionRouter);
  app.use("/", siteRouter);
}
module.exports = routes;
