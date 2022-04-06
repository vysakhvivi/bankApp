import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  database: any = {
    1000: { acno: 1000, accntname: "achu", balance: 4000, pswd: 1000 },
    1001: { acno: 1001, accntname: "kichu", balance: 5000, pswd: 1001 },
    1002: { acno: 1002, accntname: "sachu", balance: 6000, pswd: 1002 }

  }

  aim = "your perfect banking partner"

  inputplaceholder = "Account number please !!! "
  acno = "";
  pswd = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // loginaccnt(event: any) {
  //   this.acno = event.target.value
  //   console.log(this.acno);

  // }

  // passaccnt(event: any) {
  //   this.pswd = event.target.value
  //   console.log(this.pswd);

  // }




  login() {
    var acno = this.acno;
    var pswd = this.pswd;

    let database = this.database

    if (acno in database) {
      if (pswd == database[acno]["pswd"]) {
        alert("login succesfull")
        this.router.navigateByUrl("dashboard")

      }
      else {
        alert("Incorrect password")

      }
    }
    else {
      alert("user not found")

    }
  }

  // login(a: any, b: any) {
  //   var acno = a.value;
  //   var pswd = b.value

  //   let database = this.database

  //   if (acno in database) {
  //     if (pswd == database[acno]["password"]) {
  //       alert("login succesfull")

  //     }
  //     else {
  //       alert("Incorrect password")

  //     }
  //   }
  //   else {
  //     alert("user not found")

  //   }
  // }

}