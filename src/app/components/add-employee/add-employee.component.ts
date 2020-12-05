import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Emp, EmpList } from 'src/app/interface/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  submitted:boolean = false
  addflag: boolean = {} as boolean
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(value: any) {
    this.submitted = true
    let empval: Emp = {} as Emp
    empval.name = value.empName
    empval.dept = value.empDept
    empval.mobi = value.empMob

    let emparr: Emp[] = [] as Emp[]

    if (localStorage.hasOwnProperty('employee')) {
      let jsonstring: string | null = localStorage.getItem('employee')
      let jsonobj: EmpList | null = jsonstring ? JSON.parse(jsonstring) : ''
      emparr = jsonobj ? jsonobj.empVals : []
      emparr.forEach((ev) => {
        if (ev.mobi === empval.mobi) {
          this.addflag = false
          console.log(this.addflag)
        }
        else{
          this.addflag = true
          console.log(this.addflag)
        }
      })
    }
    else{
      this.addflag = true
    }
    if (this.addflag && this.submitted) {
        emparr.push(empval)
        let empj: EmpList = {} as EmpList
        empj.empVals = emparr
        localStorage.setItem("employee", JSON.stringify(empj))
    }
  }

}
