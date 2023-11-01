const dbInstance = require("../config/db");

module.exports = {
  getAllStocks: async function () {
    try {
      const stockModel = await dbInstance.instance.model("Stock");
      const data = await stockModel.find({});
      return {
        success: true,
        message: "Stock List Retrieved",
        data,
      };
    } catch (error) {
      console.log(`Error querying stocks: ${error}`);
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  },

  getStockByRiskScore: async function (riskScore) {
    try {
      const stockModel = await dbInstance.instance.model("Stock");
      const data = await stockModel.findOne({
        "Risk Score/Tolerence": parseInt(riskScore),
      });
      return {
        success: true,
        message: "Stock Retrieved",
        data,
      };
    } catch (error) {
      console.log(`Error querying stocks: ${error}`);
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  },
};
