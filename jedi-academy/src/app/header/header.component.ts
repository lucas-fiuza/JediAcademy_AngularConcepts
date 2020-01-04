import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Clicando(this){
    alert("Clicado")
    console.log(this);
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
