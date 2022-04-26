import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations:[
    trigger('openclose',[
      state('open',style({
        height:'500px',
        backgroundColor:'blue'
      })),
      state('close',style({
        height:'200px',
        backgroundColor:'green'
      })),
      transition('open=>close',[
        animate('2s')
      ]),
      transition('close=>open',[
        animate('3s')
      ])
    ]
    )
  ]
})
export class AnimationDemoComponent implements OnInit {

  isopen=true

  constructor() { }

  ngOnInit(): void {
  }

  toggle()
  {
    this.isopen=!this.isopen
  }

}
