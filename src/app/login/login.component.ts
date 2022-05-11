import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  aim = 'your perfect banking partner';

  inputplaceholder = 'Account number please !!! ';
  acno = '';
  pswd = '';

  constructor(private router: Router, private db: DatabaseService,private fb:FormBuilder) {}

  

  loginform=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  ngOnInit(): void {}

  // loginaccnt(event: any) {
  //   this.acno = event.target.value
  //   console.log(this.acno);

  // }

  // passaccnt(event: any) {
  //   this.pswd = event.target.value
  //   console.log(this.pswd);

  // }

  login() {
    var acno = this.loginform.value.acno;
    var pswd = this.loginform.value.pswd;

    if(this.loginform.valid)
    {
     this.db.login(acno,pswd)
     .subscribe((result:any)=>{
       if(result){
        localStorage.setItem("currentacno", JSON.stringify(result.currentacno))
        localStorage.setItem("currentuser", JSON.stringify(result.currentuser))
        localStorage.setItem("token", JSON.stringify(result.token))
        alert('login succesfull');
           this.router.navigateByUrl('dashboard');
       }
     },
     (result)=>{
       alert(result.error.message)
     })
     
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