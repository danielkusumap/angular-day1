import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  umurInDays(tanggal_lahir: Date){
    let dateNow = new Date();
    let difference_in_time = dateNow.getTime() - tanggal_lahir.getTime();
    let difference_in_days = Math.round(difference_in_time / (1000 * 3600 * 24));
    return difference_in_days;
  }
  constructor() { }
}
