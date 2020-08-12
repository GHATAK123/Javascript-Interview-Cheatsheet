// Import the express library here
const express =  require('express');
// Instantiate the app here
const app =  express();

const PORT = process.env.PORT || 4001;

app.get("/",(req,res)=>{
   res.send("Hello");
})

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});