import express from "express";
import { v4 as uuidv4 } from 'uuid';

const route = express.Router();
let users =[
     
]

route.get('/',(req,res)=> {

  res.send(users);

})


route.post('/',(req ,res)=> {
 const user = req.body;
 const  userId =uuidv4();
 const userWithId = {...user, id:userId};
 
 users.push(userWithId);
 res.send(` User with name ${user.f_name} has been added to db`)


});

route.get('/:id',(req ,res)=> {
  const id = req.params.id;
  const requiredUser= users.find((user)=> user.id === id);
  res.send(requiredUser);
  res.send(`user with id ${id} is found`);

});
route.delete('/:id',(req ,res)=>{
  const id = req.params.id;
  users = users.filter((user)=> user.id !== id);
  res.send(`user with id ${id} is deleted`);
})
route.patch('/:id',(req ,res)=>{
  const id = req.params.id;
  const foundUser= users.find((user)=> user.id === id);
  const {f_name,l_name,age} = req.body;
  if(f_name) foundUser.f_name =f_name;
  if(l_name) foundUser.l_name =l_name;
  if(age) foundUser.age =age;
  res.send(`user with id ${id} is updated`);
})



export default route;