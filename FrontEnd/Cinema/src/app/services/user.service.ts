import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUsers: User[] = [
    {user: '1dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '2dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '3dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '4dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '5dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '6dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '7dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '8dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '9dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'}
  ];

  constructor() { }

  getUser() {
    return this.listUsers.slice();
  }
  
  deleteUser(index: number) {
    this.listUsers.splice(index, 1);
  }
}
