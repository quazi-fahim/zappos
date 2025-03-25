const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authroutes"));
app.use("/api/products", require("./routes/productroutes"));
app.get("/health",(req,res)=>{
    res.send("Connected!")
    })
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
