import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  currentuser: any
  currentacno: any

  database: any = {
    1000: { acno: 1000, accntname: "achu", balance: 4000, pswd: 1000, transaction: [] },
    1001: { acno: 1001, accntname: "kichu", balance: 5000, pswd: 1001, transaction: [] },
    1002: { acno: 1002, accntname: "sachu", balance: 6000, pswd: 1002, transaction: [] }

  }

  constructor(private http:HttpClient) { 
    this.getdetails()
  }

  savedetails() {
    localStorage.setItem("database", JSON.stringify(this.database))
    if (this.currentacno) {
      localStorage.setItem("currentacno", JSON.stringify(this.currentacno))
    }
    if (this.currentuser) {
      localStorage.setItem("currentuser", JSON.stringify(this.currentuser))
    }

  }

  getdetails(){
    if(localStorage.getItem("database"))
    {
      this.database=JSON.parse(localStorage.getItem("database")||'')
    }
    if(localStorage.getItem("currentacno"))
    {
      this.currentacno=JSON.parse(localStorage.getItem("currentacno")||'')
    }
    if(localStorage.getItem("currentuser"))
    {
      this.currentuser=JSON.parse(localStorage.getItem("currentuser")||'')
    }
  }



  register(acno: any, pswd: any, accntname: any) {
    const data={
      acno,
      pswd,
      accntname
    }
  return  this.http.post('http://localhost:3000/register',data)
  }
  //login

  login(acno: any, pswd: any) {


    const data={
      acno,
      pswd
    }
    return this.http.post('http://localhost:3000/login',data)
  }

  deposit(acno: any, pswd: any, amnt: any) {
    const data={
      acno,
      pswd,
      amnt
    }
  return  this.http.post('http://localhost:3000/deposit',data,this.getoptions())
  }

  getoptions(){
    const token= JSON.parse(localStorage.getItem("token")||'')
    let headers= new HttpHeaders
    if(token){
      headers=headers.append('h-token',token)
      options.headers=headers
    }
    return options
  }
  

  withdraw(acno: any, pswd: any, amnt: any) {
    const data={
      acno,
      pswd,
      amnt
    }
  return  this.http.post('http://localhost:3000/withdraw',data,this.getoptions())
  }


  transaction(acno: any) {
    const data={
      acno
    }
  return  this.http.post('http://localhost:3000/transaction',data,this.getoptions())
  }

  
  ondelete(acno:any)
  {
    return this.http.delete('http://localhost:3000/ondelete/'+acno,this.getoptions())
  }

}


