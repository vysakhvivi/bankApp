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
    this.acno=this.ds.currentacno
    this.transaction=this.ds.transaction(this.acno)
    console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}
