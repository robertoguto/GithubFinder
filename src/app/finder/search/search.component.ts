import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Output() onTyping = new EventEmitter<string>();

  searchValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  typing($event: any): void {
    this.searchValue = $event.target.value.trim();
  }

  search(): void {
    this.onTyping.emit(this.searchValue);
  }
}
