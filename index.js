import  Express  from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js"
  const app =Express();
  const PORT= 5000;
app.use(bodyParser.json());
app.get('/', (req,res)=>res.send("homepage is live"));
app.use('/users', userRoutes);



app.listen(PORT,()=> console.log(`Sever Is running on http://localhost:${PORT}`));