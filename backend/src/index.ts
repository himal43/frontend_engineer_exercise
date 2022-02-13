import { config as dotenvConfig } from "dotenv";
import { connect } from "mongoose";
import { createApp } from "./app";

connect("mongodb://treeline:treeline@localhost:27017/jshiring", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

dotenvConfig();

const app = createApp();
const port = Number(process.env["PORT"]);
app.listen(port, () => console.log(`App listening on :${port}`));
