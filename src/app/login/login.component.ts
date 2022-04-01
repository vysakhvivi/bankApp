import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  database={
    1000:{accntno:1001,accntname:"achu",balance:4000,password:1000},
    1001:{accntno:1002,accntname:"kichu",balance:5000,password:1001},
    1002:{accntno:1003,accntname:"sachu",balance:6000,password:1002}

  }

  aim="your perfect banking partner"

  inputplaceholder="Account number please !!! "
  acno="";
  pass="";

  constructor() { }

  ngOnInit(): void {
  }

  loginaccnt(event:any)
  {
this.acno=event.target.value
console.log(this.acno);

  }

  passaccnt(event:any)
  {
this.pass=event.target.value
console.log(this.pass);

  }

  login()
  {
    alert("login clicked")
  }

}
