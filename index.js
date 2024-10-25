const express = require("express");
const app = express();
const cors = require("express-cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  // get the client ip address from header
  const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.json({message: "Hello World from server ", clientIp});
});


const PORT = 4898 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
