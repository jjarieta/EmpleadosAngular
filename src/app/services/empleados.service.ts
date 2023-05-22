import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados} from '../clases/Empleados';

@Injectable({
  providedIn: 'root'
})


export class EmpleadosService {
  constructor(private http: HttpClient) {}
  employees: any[] = [];

  getQuery(query: string) { 
    const url = `http://localhost:5002/${query}`;
    return this.http.get(url);
  }

 
  getEmployees() { 
    console.log(this.getQuery('empleados'));
    return   this.getQuery('empleados');
  }

  AddEmployees(empleado: Empleados){
    return this.http.post(`http://localhost:5002/empleados`, empleado);
  }
 
}
