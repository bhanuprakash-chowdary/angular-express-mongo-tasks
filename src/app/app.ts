import { Component } from '@angular/core';
import { Header } from './component/header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header,RouterOutlet,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
