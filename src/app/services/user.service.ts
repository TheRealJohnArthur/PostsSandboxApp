import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        isActive: false,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true

      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@yahoo.com',
        isActive: true,
        registered: new Date('08/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Jake',
        lastName: 'Doe',
        email: 'jakedoe@gmail.com',
        isActive: true,
        registered: new Date('04/02/2018 08:30:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
   
}
