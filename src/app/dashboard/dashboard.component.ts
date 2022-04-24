import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno = ""
  pswd = ""
  amount = ""
  acno1 = ""
  pswd1 = ""
  amount1 = ""

  user=""
  logindate:any
  accno:any
  constructor(private ds: DatabaseService, private fb: FormBuilder,private router:Router) { 

    this.user=this.ds.currentuser
    this.logindate=new Date()

  }

  depositform = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawform = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })


  ngOnInit(): void {
    if(!localStorage.getItem("currentacno")){
      alert("Please Log In to Continue..")
      this.router.navigateByUrl("")
    }
    
  }

  deposit() {
    var acno = this.depositform.value.acno
    var pswd = this.depositform.value.pswd
    var amount = this.depositform.value.amount
    if (this.depositform.valid) {
      var result = this.ds.deposit(acno, pswd, amount)
      if (result)
        alert(amount + " has been deposited.. The new balance is " + result)
    }
    else {
      alert("invalid form")
    }
  }

  withdraw() {
    var acno = this.withdrawform.value.acno1
    var pswd = this.withdrawform.value.pswd1
    var amount = this.withdrawform.value.amount1

    if (this.withdrawform.valid) {
      var result = this.ds.withdraw(acno, pswd, amount)
      if (result)
        alert(amount + " has been withdrawn.. The new balance is " + result)
    }
    else {
      alert("invalid form")
    }

  }

  deletefromparent(){
    this.accno=JSON.parse(localStorage.getItem("currentacno")||"")
  }

  logout()
  {
    localStorage.removeItem("currentacno")
    localStorage.removeItem("currentuser")
    this.router.navigateByUrl("")
  }
}
