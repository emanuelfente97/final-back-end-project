require("dotenv").config();
const cors = require("cors")
const corsOptions ={
  origin: '*',
  credentials: true,
  optionSuccessStatus:200,
  
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const authRoute = require("./routes/auth");
const ContactRoute = require("./routes/contact");

mongoose
  .connect(process.env.DATA_URL, { useNewUrlParser: true })
  .then(() => console.log("DB Connection succesful"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors(corsOptions))
app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/contacts", ContactRoute);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend serve is running ");
});
