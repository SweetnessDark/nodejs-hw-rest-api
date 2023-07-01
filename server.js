const mongoose = require("mongoose");

const app = require("./app");

const MONGO_URL =
  "mongodb+srv://rinwatanabe:kuro1617@cluster0.ihxomvk.mongodb.net/";

mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
