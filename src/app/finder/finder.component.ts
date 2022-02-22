import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html'
})
export class FinderComponent implements OnInit {
  theme: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(theme: boolean): void {
    this.theme = theme;
  }

  search(event: string): void {
    console.log(event);
  }

}
