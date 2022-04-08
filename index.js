import express from "express";
import Razorpay from "razorpay";
import shortid from "shortid";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import fs from 'fs';

dotenv.config()
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json())

var razorpay = new Razorpay({
    key_id : process.env.KEY_ID,
    key_secret : process.env.KEY_SECRET
});

var liverazorpay = new Razorpay({
    key_id : process.env.KEY_IDL,
    key_secret : process.env.KEY_SECRETL
});

app.get('/', (req, res) => {
    res.send('Welcome✅😂')
})

app.post('/razorpay',async (req, res) => {
    const payment_capture = 1;
    const amount = 119000;
    const currency = 'INR'
    const options = {
        amount : (amount*100),
        currency,
        receipt:shortid.generate(),
        payment_capture
    }
    try{
        const response = await razorpay.orders.create(options)
        console.log(response)
        res.json({
            id : response.id,
            currency : response.currency,
            amount : response.amount
        })
    }
     catch(err){
         console.log(err)
     }
})

app.post('/ecomrazorpay',async (req, res) => {
    const payment_capture = 1;
    const amount = 119000;
    const currency = 'INR'
    const options = {
        amount : (amount*100),
        currency,
        receipt:shortid.generate(),
        payment_capture
    }
    try{
        const response = await liverazorpay.orders.create(options)
        console.log(response)
        res.json({
            id : response.id,
            currency : response.currency,
            amount : response.amount
        })
    }
     catch(err){
         console.log(err)
     }
})


app.post('/liverazorpay',async (req, res) => {
    const payment_capture = 1;
    const amount = 500;
    const currency = 'INR'
    const options = {
        amount : (amount*100),
        currency,
        receipt:shortid.generate(),
        payment_capture
    }
    try{
        const response = await liverazorpay.orders.create(options)
        console.log(response)
        res.json({
            id : response.id,
            currency : response.currency,
            amount : response.amount
        })
    }
     catch(err){
         console.log(err)
     }
})

app.listen(port , () => {
    console.log("Listening on port 4000")
})