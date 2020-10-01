import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {
      id: 1,
      firstName: 'Kelly',
      lastName: 'ALejandra'
    },
    {
      id: 2,
      firstName: 'hamza',
      lastName: 'NADIF'
    },
    {
      id: 3,
      firstName: 'Adrien',
      lastName: 'ALEX'
    },
    {
      id: 4,
      firstName: 'somalia',
      lastName: 'GOGOTO'
    }
  ]

  getUserById(id: number){
   const users =  this.users.find(
      (userObject)=>{
        return userObject.id == id;
      }
   );
   return users;
  }

  constructor() { }
}
