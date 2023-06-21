const mongoose = require("mongoose");

const app = require("./app");

// const MONGO_URL =
//   "mongodb+srv://rinwatanabe:kuro1617@cluster0.ihxomvk.mongodb.net/contact_book?retryWrites=true&w=majority";

const { MONGO_URL, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
