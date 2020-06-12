const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 2021
var customer = require("./Customer")
var ObjectId = require('mongodb').ObjectID;
//const url ="mongodb://damukiran:damu3383@cluster0-shard-00-00-2wakd.mongodb.net:27017/bookservice"
const url = "mongodb://prepodayyappa:$PreProdAyyappa@13.126.33.219:27017/preprodayyappa"
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const Customer = mongoose.model("Customers")
mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('Connected to the database successfully.')
})
app.get('/customers', (req, res) => {
    var input=req.query
    Customer.findById({"_id":input.id}).exec(function (err, data) {
        console.log(data)
        res.send(data)
    })
})
app.post('/', (req, res) => {
    var input = req.body
    var newCustomer = {
        name: input.name,
        age: input.age,
        address: input.address
    }
    var customer = new Customer(newCustomer)
    customer.save().then(() => {
        console.log("data saved")
        res.send("data saved")
    }).catch((err) => {
        if (err) { throw err }
    })
})
app.listen(port, () => {
    console.log("server started with port no" + port)
})