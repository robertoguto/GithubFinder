import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    FinderComponent,
    HeaderComponent,
    SearchComponent,
    ResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FinderModule { }
