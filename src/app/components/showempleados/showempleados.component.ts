import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-showempleados',
  templateUrl: './showempleados.component.html',
  styleUrls: ['./showempleados.component.scss']
})
export class ShowempleadosComponent implements OnInit {
  employees: any[] = []; 

  constructor(private employeesService: EmpleadosService) { 
    this.employeesService.getEmployees().subscribe((data: any) => { 
      console.log(data);
      this.employees = data; 
    });
  }

  ngOnInit(): void {}
}
