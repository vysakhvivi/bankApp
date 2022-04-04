import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  database:any={
    1000:{acno:1000,accntname:"achu",balance:4000,password:1000},
    1001:{acno:1001,accntname:"kichu",balance:5000,password:1001},
    1002:{acno:1002,accntname:"sachu",balance:6000,password:1002}

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

  


  login(a:any,b:any)
  {
    var acno=a.value;
    var pswd=b.value
  
    let database=this.database
  
    if(acno in database)

    {
      if(pswd==database[acno]["password"]){
        alert("login succesfull")

      }
      else
      {      alert("Incorrect password")
  
      }
    }
    else
    {      alert("user not found")

    }
    
   
}
}