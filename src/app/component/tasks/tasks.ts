import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/task-item';
import { TasksService } from '../../services/tasks';
import { Task } from '../../Task';
import { AddTask } from '../add-task/add-task';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule,TaskItem,AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  tasks: Task[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  // Fetch all tasks from backend
  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onAddTask(task: Task):void{
    this.taskService.addTask(task).subscribe((task)=>{(
      this.tasks.push(task))
    });
  }

  // Delete a specific task
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task._id!).subscribe(() => {
      this.tasks = this.tasks.filter(t => t._id !== task._id);
    });
  }

  toggleReminder(task: Task): void{
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  
}
