require('dotenv').config()

var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose')
let Hospital = require('./models/hospital');
var HospitalRoutes      = require("./routes/hospital");    
let data;

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(HospitalRoutes); 

mongoose
.connect(process.env.CLOUD_MONGODB_PATH ,{useNewUrlParser: true, useUnifiedTopology: true})
.then(result => {
  // console.log(data)
  // // data.records.forEach(async function(d){
  //  Hospital.insertMany([
  //    {
  //      _id: 1,
  //      name: "Bhaktivedanta",
  //      category: "Public",
  //      address: "Thane",
  //      location: {
  //       type: "Point",
  //       coordinates: [
  //        "72.870265",
  //        "19.270236"
      
  //       ]
  //     }
  //   },{
  //     _id: 2,
  //      name: "Breach candy",
  //      category: "Private",
  //      address: "Mumbai",
  //      location: {
  //       type: "Point",
  //       coordinates: [
  //         "72.804416",
  //         "18.972479"
      
  //       ]
  //     }
  //     },{
  //       _id: 3,
  //       name: "Sahyog Hospital",
  //       category: "Private",
  //       address: "Patna",
  //       location: {
  //        type: "Point",
  //        coordinates: [
  //          "85.108359",
  //          "25.628991" 
  //        ]
  //      }
  //     }
      
  //      //  state: d.state,
  //     //  district: d.district,
  //     //  pincode: d._pincode,
  //     //  telephone: d.telephone,
  //     //  emergency: d.emergencynum,
  //     //  email: d.hospitalprimaryemailid,
  //     //  website: d.website,
  //     //  specialties:d.specialties,
  //     // latitude: d._googlemapcorridinate_lati,
  //     // longitude: d._googlemapcorridinate_longi,
  //     //  facilities: d.facilities
     
    // ])
    // Hospital.listIndexes().then(indexes => {
    //   console.log(indexes);
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  app.listen(3000,function(){
    console.log(" Server has started");
  })
})
.catch(err => {
  console.log(err);
})



// var request = require('request');
// request('https://api.data.gov.in/resource/7d208ae4-5d65-47ec-8cb8-2a7a7ac89f8c?api-key=579b464db66ec23bdd000001f077a08693744af45571d594ff223f1d&format=json&offset=0&limit=1000', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   data = JSON.parse(body)
//   // console.log('body:',data.records); // Print the HTML for the Google homepage.
// });



   



