const express = require("express"); 
const PORT = process.env.PORT || 9090;
const mongoose = require ('mongoose')

//routers
const authRouter = require('./app/routes/authRouter')

// const cors = require("cors");
// const cookieSession = require("cookie-session");

//for parse json
const app = express();

// parse requests of content-type - application/json
app.use(express.json());
app.use("/auth", authRouter)

// var corsOptions = {
//   origin: "*"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.use(
//   cookieSession({
//     name: "bezkoder-session", // keys: ['key1', 'key2'],
//     secret: "COOKIE_SECRET", // should use as secret environment variable
//     httpOnly: true
//   })
// );

// mongodb+srv://Userdb:gfrxu9sAH8bsPcqC@clusterone.0itk6f1.mongodb.net/?retryWrites=true&w=majority

// connect to BD Mongo 
//log:test_admin pass:Gu70kKjiSpZJLOI

// set port, listen for requests, use after enable express 

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://Userdb:gfrxu9sAH8bsPcqC@clusterone.0itk6f1.mongodb.net/?retryWrites=true&w=majority');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.error(`Failed to start server on port ${PORT}: ${error}`);
  }
};


start();