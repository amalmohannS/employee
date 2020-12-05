import { Component, OnInit } from '@angular/core';
import { Emp, EmpList } from 'src/app/interface/employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  emparr:Emp[] = [] as Emp[]
  constructor() { }

  ngOnInit(): void {
    this.onRetrieve()
  }

  onRetrieve(){
    if(localStorage.hasOwnProperty('employee')){
      let jsonstring: string | null = localStorage.getItem('employee')
      let jsonobj: EmpList | null = jsonstring?JSON.parse(jsonstring):''
      this.emparr = jsonobj?jsonobj.empVals:[]
      
    }

  }


}
