import express from 'express';
import Task from './models/Task.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config(); 

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/api/tasks', async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

app.get('/api/tasks/:id',async(req,res)=>{
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(400).json({ message: 'Invalid ID format' });
  }
})

app.delete('/api/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

app.put('/api/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Atlas Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
