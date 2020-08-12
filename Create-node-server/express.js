// Import the express library here
const express =  require('express');
// Instantiate the app here
const app =  express();

const PORT = process.env.PORT || 4001;

app.get("/",(req,res)=>{
   res.send("Hello");
})
const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 } };
// GET /monsters/hydra
app.get('/monsters/:name', (req, res, next) => {
  console.log(req.params) // { name: 'hydra' };
  res.send(monsters[req.params.name]);
});

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});