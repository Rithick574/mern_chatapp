const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const chats = require("./data/data");
const cookieParser=require('cookie-parser')
const connectDB=require('./config/db')
dotenv.config();
const userRouter=require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddlewae");

connectDB()

const app = express();

app.use(express.json());


app.use(cors());

app.use(cookieParser())

app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true
}))

// app.get("/api/chat", (req, res) => {
  //   console.log('hereeee');
  //   res.json(chats);
  // });
  
  // app.get("/api/chat/:id", (req, res) => {
    //   const singleChat = chats.find((c) => c._id === req.params.id);
    //   res.send(singleChat);
    // });
    
    app.get("/", (req, res) => {
      res.send("API is running");
    });

    
    app.use('/api/user',userRouter)

    app.use(notFound)
    app.use(errorHandler)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
