import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registration=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  aname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]]
  
})  

  constructor(private db: DatabaseService, private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  Register() {
    var acno = this.registration.value.acno
    var pswd = this.registration.value.pswd
    var aname = this.registration.value.aname

    if(this.registration.valid)
    {
      var result = this.db.register(acno, pswd, aname)

      if (result) {
        alert("Successfully registered")
        this.router.navigateByUrl("")
      }
      else {
        alert("User already Exists. Please Log in")
      }
    }
    else
    {
      alert("invalid form")
    }
    
  }
  

}
