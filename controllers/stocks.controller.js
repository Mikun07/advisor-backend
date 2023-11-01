const stockService = require("../services/stocks.service");

module.exports = {
  list: async function (req, res) {
    const { success, message, data } = await stockService.getAllStocks();
    return res.json({
      success,
      message,
      data,
    });
  },
  findByScore: async function (req, res) {
    const { success, message, data } = await stockService.getStockByRiskScore(
      req.params.score
    );
    return res.json({
      success,
      message,
      data,
    });
  },
};
