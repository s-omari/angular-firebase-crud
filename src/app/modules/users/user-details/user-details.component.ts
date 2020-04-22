import { Component, OnInit, Input } from '@angular/core';
import {User} from '../user.model';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  updateActive(isActive: boolean) {
    this.usersService
      .updateUser(this.user.key, { active: isActive })
      .catch(err => console.log(err));
  }
 
  deleteUser() {
    this.usersService
      .deleteUser(this.user.key)
      .catch(err => console.log(err));
  }

}
