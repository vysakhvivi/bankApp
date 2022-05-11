import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction:any
  acno:any


  constructor(private ds:DatabaseService) {
    this.acno=JSON.parse(localStorage.getItem("currentacno")||'')
    this.ds.transaction(this.acno)
    .subscribe((result:any)=>{
if(result){
  this.transaction=result.transaction
}
    },
    
      (result)=>{
        alert(result.error.message)
      }
    )
    console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}
