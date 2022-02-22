import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    FinderComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FinderModule { }
