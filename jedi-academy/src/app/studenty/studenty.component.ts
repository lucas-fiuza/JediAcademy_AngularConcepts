import { Component, OnInit, Input } from '@angular/core';
import { Student } from './studenty.model'

@Component({
  selector: 'jad-studenty',
  templateUrl: './studenty.component.html',
  styleUrls: ['./studenty.component.scss']
})
export class StudentyComponent implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

}
