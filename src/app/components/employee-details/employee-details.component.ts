import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Emp, EmpList } from 'src/app/interface/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  emparr:Emp[] = [] as Emp[]
  emp:Emp = {} as Emp
  mobile:number = {} as number

  constructor(private activatedRoute: ActivatedRoute) { 
  
  }

  ngOnInit(): void {
    let param = this.activatedRoute.snapshot.params.num
    if(localStorage.hasOwnProperty('employee')){
      let jsonstring: string | null = localStorage.getItem('employee')
      let jsonobj: EmpList | null = jsonstring?JSON.parse(jsonstring):''
      this.emparr = jsonobj?jsonobj.empVals:[]
      this.emparr.forEach((empval) =>{
        if(empval.mobi === param ){
          this.emp = empval
          console.log(this.emp)
          console.log(" - "+ empval)
        }
      })
    }
  }

  onDelete(){
    if(localStorage.hasOwnProperty('employee')){
      let jsonstring: string | null = localStorage.getItem('employee')
      let jsonobj: EmpList | null = jsonstring?JSON.parse(jsonstring):''
      this.emparr = jsonobj?jsonobj.empVals:[]
      this.emparr.forEach((empval,index) =>{
        if(empval.mobi === this.emp.mobi){
          this.emparr.splice(index,1)
          console.log(this.emparr)
        }
      })
    }
    let empj: EmpList = {} as EmpList
    empj.empVals = this.emparr
    localStorage.setItem("employee",JSON.stringify(empj))

  }

  

}
