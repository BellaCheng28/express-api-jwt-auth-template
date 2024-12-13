const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRouter = require("./controllers/users");
const testJWTRouter = require("./controllers/test-jwt");
const profilesRouter = require("./controllers/profiles");
const cors = require("cors");
const port = process.env.PORT ? process.env.PORT : "3000";
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // 前端地址
    methods: ["GET", "POST", "PUT", "DELETE"], // 允许的请求方法
    allowedHeaders: ["Content-Type", "Authorization"], // 允许的请求头
  })
);
app.use("/test-jwt", testJWTRouter);
app.use("/users", usersRouter);
// Routes go here
app.use("/profiles", profilesRouter);


app.get('/',(req,res)=>{
  res.json({"message":"hello"})
})

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
