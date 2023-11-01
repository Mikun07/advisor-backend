const mongoose = require("mongoose");

class DBInstance {
  instance;
  constructor() {
    this.init();
  }

  async init() {
    if (!this.instance) {
      try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {});
        this.instance = connection;
        connection.model("Stock", {
          "Risk Score/Tolerence": Number,
          "Nigerian Stocks": String,
          "Foriegn Stocks": String,
          "Tech Stocks": String,
          "Emerging Stocks": String,
          "Nigerian Bonds": String,
          "Foriegn Bonds": String,
          "Commodities": String,
          "Real Estate": String,
          "T-Bills": String,
          "Alternative": String,
        });
      } catch (error) {
        console.log(`Database connection error: ${error}`);
      }
    }
  }
}
const db = new DBInstance();
module.exports = db;
