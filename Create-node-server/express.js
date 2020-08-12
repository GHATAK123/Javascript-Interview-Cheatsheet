// Import the express library here
const express =  require('express');
// Instantiate the app here
const app =  express();

const PORT = process.env.PORT || 4001;

const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 },thanos: { height: 9, age: 41 } };
app.get("/",(req,res)=>{
   res.send("Hello");
})

// Dynamic Routing
app.get('/monsters/:name', (req, res, next) => {
  console.log(req.params) // 
  if(req.params.name)
  res.send(monsters[req.params.name]);
  else
  res.status(404).send('Monster not found');
});
app.post('/monsters',(req,res,next) => {
  const receivedExpression = createElement('monsters', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }


});
// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});