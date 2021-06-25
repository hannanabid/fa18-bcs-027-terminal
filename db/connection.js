const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://hannanabid:Qwerty.123@cluster0.yz7o4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  )
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((error) => {
    console.log("Error while connecting to Database");
    console.log(error.message);
  });
