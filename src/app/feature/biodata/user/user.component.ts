import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  nama = 'daniel kusuma pratama';
  umur = 23;
  tanggal_lahir = new Date(2001, 1, 27);
  umur_in_days = 0;

  constructor(private userService: UserService){};

  ngOnInit() {
      this.umur_in_days = this.userService.umurInDays(this.tanggal_lahir);
  }
}
