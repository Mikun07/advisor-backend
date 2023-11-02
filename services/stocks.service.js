// const dbInstance = require("../config/db");
const { MongoClient, ServerApiVersion } = require("mongodb");

async function getCollection() {
  const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
   const connection = await client.connect();
    const db = connection.db("advisory");
    const collection = db.collection("stocks");
    return collection;
  } catch(error) {
    throw error
  }
}

module.exports = {
  getAllStocks: async function () {
    try {
        const stocks = await getCollection();
        const data = await stocks.find({}).toArray();
      return {
        success: true,
        message: "Stock List Retrieved",
        data,
        stocks
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
      const stocks = await getCollection();
      const data = await stocks.findOne({
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
