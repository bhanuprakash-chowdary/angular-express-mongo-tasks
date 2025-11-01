import { Component ,signal } from '@angular/core';
import { Button } from '../button/button';
import { UiService } from '../../services/ui';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [Button,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 title = signal('Task Tracker');

 showAddTask!: boolean;
 subscription!: Subscription;

 constructor(private uiSevice:UiService,private router:Router){
  this.subscription = this.uiSevice.onToggle().subscribe(value=>this.showAddTask=value);
 }

 toggleAddTask(){
  this.uiSevice.toggleAddTask();
 }

 hasRoute(route: string){
  return this.router.url === route;
 }
}
