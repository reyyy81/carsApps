//  import express

 const express = require('express');
 const fs = require('fs');
 const cors = require('cors');
 const bodyParser = require('body-parser');
 const app = express();
 app.use(cors());
 app.use(bodyParser.urlencoded({
     extended: true
 }));
 app.use(bodyParser.json());
 
 let carsMockData = [
     {
         "id": 1,
         "brand": "Hyundai",
         "name": "Ioniq",
         "releaseYear": 2017,
         "color": "blue"
     },
     {
         "id": 2,
         "brand": "Toyota",
         "name": "Prius",
         "releaseYear": 2007,
         "color": "blue"
     },
     {
         "id": 3,
         "brand": "Chevrolet",
         "name": "Aveo",
         "releaseYear": 2007,
         "color": "white"
     },
     {
         "id": 4,
         "brand": "BMW",
         "name": "M5",
         "releaseYear": 2017,
         "color": "White"
     },
     {
         "id": 5,
         "brand": "Tesla",
         "name": "S",
         "releaseYear": 2019,
         "color": "Black"
     }
 ]
 
 app.get("",(req,res)=>{
     res.send("This is the home page. Try changing the URL to view other pages.")
 })
 
 /** Create GET API. API shoudl return  const carsMockData*/
 app.get("/list",(req,res)=>{
     fs.readFile("./carsData.json", "utf8", (err, jsonString) => {
         if (err) {
           console.log("File read failed:", err);
           return;
         }
         res.send(jsonString);
     });
 })
 
 
 
 
 /** Create POST API. Get the new car data from react. 
  *      Check if car with id exists. If Yes return 500. With message 'Car already exists'
  *      If there is no car with the id, add the new car to  carsMockData and return carsMockData as response */
 app.post("/save", (req,res)=>{
     fs.readFile("./carsData.json", "utf8", (err, jsonString) => {
 
         if (err) {
           console.log("File read failed:", err);
           return;
         }
 
         let id = req.body.id;
         let brand = req.body.brand;
         let name = req.body.name;
         let releaseYear = req.body.releaseYear;
         let color = req.body.color;
         jsonString = jsonString || [];
 
         let json = JSON.parse(jsonString);
 
         json.push({"id": id, "brand": brand, "name": name, "releaseYear": releaseYear, "color": color});
         fs.writeFile("./carsData.json", JSON.stringify(json), (err, jsonString) => {
             if (err) {
                 console.log("File write failed:", err);
                 return;
             }
         });
         res.sendStatus(500);
     });
 })
 
 
 
//   *  Check if car with id exists. If No return 500 with error 'No car with given id exist'. 
//   *  If there is car with the requested id, update that car's data in 'carsMockData' and return 'carsMockData' */
  app.put("/edit", (req, res) => {
     
     fs.readFile("./carsData.json", "utf8", (err, jsonString) => {
 
         if (err) {
           console.log("File read failed:", err);
           return;
         }
         
         let json = JSON.parse(jsonString);
         let id = req.body.id;
         
         let result = json.map((car) => {
             console.log("id is " +  id + "car.id " + car.id + "name is " + req.body.name);
             if (car.id == id) {
                 car.name = req.body.name;
             }
             return car;
         });
         fs.writeFile("./carsData.json", JSON.stringify(result), (err, jsonString) => {
                 if (err) {
                     console.log("File write failed:", err);
                     return;
                 }
         });
         
         res.sendStatus(500);
     });
 });
 
 
 
 /** 
  *  Check if car with id exists. If No return 500. With message 'No car with give id exists'
  *  If there is car with the requested id. Delete that car from 'carsMockData' and return 'carsMockData'
 */
 app.delete("/delete", (req, res) => {
     
     fs.readFile("./carsData.json", "utf8", (err, jsonString) => {
 
         if (err) {
           console.log("File read failed:", err);
           return;
         }
         
         let json = JSON.parse(jsonString);
         let id = req.body.id;
         let result = json.filter((car) => car.id != id);
    
         fs.writeFile("./carsData.json", JSON.stringify(result), (err, jsonString) => {
             if (err) {
                 console.log("File write failed:", err);
                 return;
             }
         });
         res.sendStatus(500);
     });
 });

app.listen(1000)