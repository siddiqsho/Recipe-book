import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuList } from './menu-list/menu-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,MenuList],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 taskName='';
}
