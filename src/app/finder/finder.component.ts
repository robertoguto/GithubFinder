import { Component, OnInit } from '@angular/core';
import { User } from '../core/models/user';
import { FinderService } from '../core/services/finder.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html'
})
export class FinderComponent implements OnInit {
  theme: boolean = true;
  user?: User;

  constructor(
    private finderService: FinderService
  ) { }

  ngOnInit(): void {
    this.search('github');
  }

  changeTheme(theme: boolean): void {
    this.theme = theme;
  }

  search(user: string): void {
    this.finderService.getUser(user).subscribe({
      next: (user: User) => {
        this.user = user;
      }
    });
  }

}
