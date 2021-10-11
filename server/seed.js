import mongoose from "mongoose";
import './connect/db-connect.js'
import faker from "faker";
import User from './models/User.js';
import Todo from './models/Todo.js'

const seed = async () => {
  try {
    // CLEANUP 
  
    await User.deleteMany();
    await Todo.deleteMany()

    // INSERTS

    const userPromises = Array(3).fill(null).map(()=>{
        const userData= {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: 'Aa0123456789!', 
        }
        const user = new User(userData)
        return user.save()
    })
    
    const userArrIds = User.find().map(item => item._id)

   const todoPromises = Array(12).fill(null).map(()=>{
     const todoData = {
      title: faker.lorem.words(),
      description: faker.lorem.sentence(),
      user: faker.random.arrayElement(userArrIds)
     }
     const todo = new todo(todoData)
     return todo.save()
   })
    

    //  SUCCESS REPORT
    console.log(`seeded`);

    // CLOSE CONNECTION TO DATABASE AND FINISH SCRIPT
    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
};

seed();
