import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  currentuser=""
  currentacno:any

  database: any = {
    1000: { acno: 1000, accntname: "achu", balance: 4000, pswd: 1000,transaction:[] },
    1001: { acno: 1001, accntname: "kichu", balance: 5000, pswd: 1001,transaction:[] },
    1002: { acno: 1002, accntname: "sachu", balance: 6000, pswd: 1002,transaction:[] }

  }

  constructor() { }

  

  register(acno: any, pswd: any, accntname: any) {
    let database = this.database

    if (acno in database) {
      return false
    }
    else {
      database[acno] = {
        acno,
        accntname,
        balance: 0,
        pswd,
        transaction:[]

      }

      return true
    }
  }
  //login

  login(acno:any,pswd:any) {


    let database = this.database;

    if (acno in database) 
    {
      if (pswd == database[acno]['pswd'])
      
      {
        this.currentuser=database[acno]['accntname']
        this.currentacno=acno
        return true
      }
      else 
      {
        alert('Incorrect password');
        return false
      }
    }
    else 
    {
      alert('user not found');
      return false
    }
  }

  deposit(acno:any,pswd:any,amnt:any)
  {
    var amount=parseInt(amnt)

    let database=this.database

    if(acno in database)
    {
      if(pswd=database[acno]["pswd"])
      {
database[acno]["balance"]+=amount
database[acno]["transaction"].push({
  type:"CREDIT",
  amount:amount
})

return database[acno]["balance"]
      }
      else
      {
        alert("wrong password")
        return false
      }
    }
    else{
      alert("User does not exists")
      return false
    }
  }

  withdraw(acno:any,pswd:any,amnt:any)
  {
    var amount=parseInt(amnt)

    let database=this.database

    if(acno in database)
    {
      if(pswd=database[acno]["pswd"])
      {
        if( database[acno]["balance"]>amount)
        {
          database[acno]["balance"]-=amount
          database[acno]["transaction"].push({
            type:"DEBIT",
            amount:amount
          })
      
          
          return database[acno]["balance"]
        }
        else
        {
          alert("insufficient funds")
        }
      
      }
      else
      {
        alert("wrong password")
        return false
      }
    }
    else{
      alert("User does not exists")
      return false
    }
  }

  transaction(acno:any)
  {
    return this.database[acno].transaction
  }
}
