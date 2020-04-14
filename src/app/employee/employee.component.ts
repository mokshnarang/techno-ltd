import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { NgModel, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  powers = ['Smart Coder', 'Super Flexible',  
  'Logical Thinker', 'Excellent Analyst'];  
model = new Employee(18, ' ', ' ', ' ');  

@Input() employee =new Employee(1,' ',' ',' ');//(1,@Input(NgModel),@Input(NgModel));

 //employee= new Employee(1,@Input(),@Input(),@Input());
submitted = false;  

onSubmit() { this.submitted = true; }  

  constructor() { }

  ngOnInit(): void {
  }

}
