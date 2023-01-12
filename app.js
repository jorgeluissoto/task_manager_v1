const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())


//Routes
app.get('/hello', (req,res)=>{
  res.send('Task Manager App')
})

// get all the tasks
app.use('/api/v1/tasks', tasks)
// create a new task
app.post('/api/v1/tasks')
// get single task
app.get('/api/v1/tasks/:id')
// update task
app.patch('/api/v1/tasks/:id')
// delete tasks
app.delete('/api/v1/tasks/:id')



const port = 3000

app.listen(port, console.log(`Server is listening on post ${port}...`))
