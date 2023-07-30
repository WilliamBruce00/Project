const mongose = require("mongoose");

class MongoDB {
  constructor() {
    this.connect = (url) => {
      mongose
        .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          console.log("Successfully Connected");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    this.scheme = () => {
      const quizScheme = new mongose.Schema(
        {
          username: String,
          email: String,
          password: String,
        },
        { timestamps: true }
      );
      const user = mongose.models.user || mongose.model("user", quizScheme);
      return user;
    };
  }
}
const mongoDB = new MongoDB();
module.exports = mongoDB;
