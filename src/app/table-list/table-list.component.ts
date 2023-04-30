import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/shared/Services/TaskService/task.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  listTask : any;
  constructor(private taskService : TaskService) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks(){
    return this.taskService.getAllTasks().subscribe(res => this.listTask = res)
  }

}
