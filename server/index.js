const date = require('date-and-time');

const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors({origin:'http://localhost:3001'}));

const data = [
    {
        name:"mobile",
        actual_price: "24,999",
        final_price: "21,999",
        available_units: "92",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"Laptop",
        actual_price: "74,999",
        final_price: "69,999",
        available_units: "54",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"Fridge",
        actual_price: "45,999",
        final_price: "41,999",
        available_units: "42",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"AC",
        actual_price: "34,999",
        final_price: "32,999",
        available_units: "68",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"Camera",
        actual_price: "1,00,999",
        final_price: "95,999",
        available_units: "25",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"Headphones",
        actual_price: "15,999",
        final_price: "14,999",
        available_units: "78",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"Airpods",
        actual_price: "24,999",
        final_price: "21,999",
        available_units: "88",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"Smartwatch",
        actual_price: "30,999",
        final_price: "27,999",
        available_units: "62",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"Ipad",
        actual_price: "95,999",
        final_price: "90,999",
        available_units: "32",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"TV",
        actual_price: "44,999",
        final_price: "43,999",
        available_units: "76",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"GoPro 10",
        actual_price: "60,999",
        final_price: "56,999",
        available_units: "47",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"Iphone 14",
        actual_price: "1,24,999",
        final_price: "1,21,999",
        available_units: "48",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"Samsung s22",
        actual_price: "84,999",
        final_price: "81,999",
        available_units: "65",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"MacBook pro",
        actual_price: "1,54,999",
        final_price: "1,48,999",
        available_units: "43",
        deal_start_time:"",
        expiry_time:""
    },
    {
        name:"Apple Watch",
        actual_price: "64,999",
        final_price: "62,999",
        available_units: "28",
        deal_start_time:"",
        expiry_time:""
    }
]

const hours = [2,3,5,7,9,12,15,18]
const expiry = [12,10,3,9,6,4]
let newData = []
setInterval(function() { 
    const utcTime = new Date()
    if(utcTime.getUTCHours()===0 && utcTime.getUTCMinutes()===0 && utcTime.getUTCSeconds()===0){
        newData = data.map((eachItem)=>{
            const rndmHour = hours[Math.floor(Math.random()*8)]
            let rndmExpiry = 24
            while((rndmHour+rndmExpiry)>24){
                rndmExpiry = expiry[Math.floor(Math.random()*6)]
            }
            return {...eachItem,deal_start_time:rndmHour,
            expiry_time:(rndmExpiry+rndmHour)}
        })
    }
 }, 1000);



app.get("/api", (request, response) => {
  response.send(newData);
});

app.get("/status", (request, response) => {
    response.send({ Status: "Order Approved" });
});

app.listen(3000);