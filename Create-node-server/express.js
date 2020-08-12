// Import the express library here
const express =  require('express');
// Instantiate the app here
const app =  express();

const PORT = process.env.PORT || 4001;

const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 } };
app.get("/",(req,res)=>{
   res.send("Hello");
})

// Dynamic Routing
app.get('/monsters/:name', (req, res, next) => {
  console.log(req.params) // 
  res.send(monsters[req.params.name]);
});

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});