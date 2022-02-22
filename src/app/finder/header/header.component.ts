import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Output() emitTheme = new EventEmitter();

  theme: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(): void {
    this.theme = !this.theme;
    this.emitTheme.emit(this.theme)
  }

}
