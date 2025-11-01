import { Component, Input , Output , EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  @Input() color!: string;
  @Input() text!: string;

  @Output() btnClick =new EventEmitter();

  onClick(){
    this.btnClick.emit();
  }
}


