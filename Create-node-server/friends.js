const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const friends = ['dipesh','ghatak','vikash','vishal','abhishek'];

const choice = {
  friends: ['dipesh','ghatak','vikash'],
  language: ['c++','java','python'],
};
const home={
  parmod:{
    city:'patna',
  },
  vishal:{
    city:'chapra',
  },
  vikash:{
    city:"gaurichowk"
  },
  ghatak:{
    city:"Ara",
  }

}

app.get('/',(req,res,next)=>{
  res.send("HomePage of friends");
});

app.get('/friends',(req,res,next)=>{
    res.send(friends);
});
app.get('/choice',(req,res,next)=>{
  res.send(choice.language);
});

app.get('/home/:name',(req,res,next)=>{
  const myhome=req.params.name;
  const fhome=home[myhome];
  if(fhome)
    res.send(fhome)
    else
    res.status(404).send();
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

