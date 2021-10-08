import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // used as a html element
  // selector: '[app-servers]', // used as a html attribute
  // selector: '.app-servers', // used as an html class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
