const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body
const Person = require('./models/person');

app.get("/", function(req,res){
  res.send("Welcome to my hotel, how can i help you guys...?");
});

app.post('/person', async (req, res) => {
  try{
      const data = req.body; // asumming that the request body contains the person data 
      // create a new person document using mongoose model
      const newPerson = new Person(data);
      const response =  await newPerson.save();
          console.log('data saved!');
          res.status(200).json(response);
    }
    catch(err){
      console.log('Error on saving person data: ', err);
      res.status(500).json({err: 'internal server error'});
    }
  });

  // for get person data 
app.get('/person', async (req, res) => {
  try {
    const data = await Person.find();
    console.log('data fetched!');
    res.status(200).json(data);
  } catch (error) {
    console.log('Error on saving person data: ', error);
      res.status(500).json({error: 'internal server error'});
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
  console.log('listening on port 3000');
});