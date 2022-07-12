const express = require("express");
const app = express();
const port = 3000;
const teamRouter = require("./routes/team");
const artifactRouter = require("./routes/artifact");
const artifactTypeRouter = require("./routes/artifact_type");
const cors = require('cors');
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/team", teamRouter);
app.use('/artifact', artifactRouter);
app.use('/artifact_type', artifactTypeRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
  });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});