const express = require("express");
const { config } = require("dotenv");
config();
const stockRoutes = require("./routes/route");

const app = express();
const PORT = process.env.PORT;
// mongoose
//   .connect(process.env.MONGO_URI, {})
//   .then(() => {
// })
// .catch((error) => {
//     console.log(`db connection error: ${error.message}`);
// });

app.use('/stocks', stockRoutes)

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
