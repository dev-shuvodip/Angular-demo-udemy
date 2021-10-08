import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    p {
      color: darkblue;
    }
  `, `
    input {
      color: blue;
    };
  `]
})
export class AppComponent {
  name = 'Angular app';
}
