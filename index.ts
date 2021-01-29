import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
const dotenv = require("dotenv").config();
import response from "./utils/response";
import myRoutes from "./routes/web.routes";
const app = express();

// body parser middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
// Routes config
process.env.NODE_CONFIG_DIR = './environment'
app.use(response.handleResponse);
myRoutes(app);

app.use(function (req:any,res:any,next:any){
  res.status(404).json({
    message: 'Unable to find the requested route!',
    status: "error",
    data: null
  },404);
});



  

const port = process.env.PORT || 3100;



//catch any unhandled rejection error
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err }`);
  //Close server & exit process
  process.exit(1);
});

if (require.main === module) {
  const server = app.listen(port, () =>
    console.log(`server running on port ${port}!!`)
  );
} else {
  
  module.exports = app;
}
