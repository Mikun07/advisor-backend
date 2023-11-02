// const { MongoClient, ServerApiVersion } = require("mongodb");

// class DBInstance {
//   instance;
//   constructor() {
//     this.init();
//   }

//   async init() {
//     if (!this.instance) {
//       const client = new MongoClient(process.env.MONGO_URI, {
//         serverApi: {
//           version: ServerApiVersion.v1,
//           strict: true,
//           deprecationErrors: true,
//         },
//       });
//       try {
//         await client.connect();
//         client.db("advisory");
//         client.collection("stocks");
//       } catch (error) {
//         console.log(`Database connection error: ${error}`);
//       } finally {
//         await client.close();
//       }
//     }
//   }
// }
// const db = new DBInstance().instance;
// module.exports = db;
