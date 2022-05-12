const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
// parse request data content type appliction/x-www-fore-rulencoded
app.use(bodyParser.urlencoded({extended:false}));

//parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
})
// import account routes
const accountRoutes = require('./src/routes/account.route');
const restaurantRouter = require('./src/routes/restaurant.router');
const categoryRouter = require('./src/routes/category.route');
const productRouter = require('./src/routes/product.route');
const promotionRouter = require('./src/routes/promotion.route');
const billRouter = require('./src/routes/bill.route');
const billdetailRouter = require('./src/routes/billdetail.route');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT,PATCH"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
  
    next();
  });

// create account routes
app.use('/vnkfood/api/', accountRoutes);
app.use('/vnkfood/api/', restaurantRouter);
app.use('/vnkfood/api/', categoryRouter);
app.use('/vnkfood/api/', productRouter);
app.use('/vnkfood/api/', promotionRouter);
app.use('/vnkfood/api/', billRouter);
app.use('/vnkfood/api/', billdetailRouter);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express Server is running at port ${port}`);
})