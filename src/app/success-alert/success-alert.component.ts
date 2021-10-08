import { Component } from "@angular/core";

@Component({
  selector: '[app-success]',
  template: `
    <h2>Success!</h2>
  `,
  styles: [`
    h2 {
      color: green;
    }
  `]
})

export class SuccessAlert {

}