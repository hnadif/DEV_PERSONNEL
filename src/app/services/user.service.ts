import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }

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


  deleteUser(id: number) {
    let i = this.users.findIndex(e => e.id === id);
    if(i > -1){
      this.users.splice(i,1);
    }
      
  }

  isExist(id: number){
    let i = this.users.findIndex(e => e.id === id);
    if(i > -1){
      return true;
    }
    return false;
  }

  updateUser(userToUpdated: any){
    let i = this.users.findIndex(e => e.id === userToUpdated.id);
    if(i > -1){
      console.log('userToUpdated"',userToUpdated);
      console.log(this.users[i])
      this.users[i] = userToUpdated;
    }
  }
}
