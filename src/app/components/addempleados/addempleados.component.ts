import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/clases/Empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Router } from '@angular/router';
import {FormsModule } from '@angular/forms' 
import Swal from 'sweetalert2'

@Component({
  selector: 'app-addempleados',
  templateUrl: './addempleados.component.html',
  styleUrls: ['./addempleados.component.scss']
})
export class AddempleadosComponent implements OnInit {
  Resultadp: any[] = [];
  ngOnInit() {
   
  }

  
  constructor(private employeesService: EmpleadosService, private router: Router,) {  
  }
  empleadosModel = new Empleados();

 
  onSubmit() {
    let objEmpleados = new Empleados();
    //data
    objEmpleados.TipoDoc =this.empleadosModel.TipoDoc;    
    objEmpleados.Documento = this.empleadosModel.Documento;
    objEmpleados.Nombres = this.empleadosModel.Nombres;
    objEmpleados.Apellidos = this.empleadosModel.Apellidos;
    objEmpleados.Direccion = this.empleadosModel.Direccion;
    objEmpleados.Telefono = this.empleadosModel.Telefono;
    if(objEmpleados.TipoDoc==null || objEmpleados.Documento==null ||objEmpleados.Nombres==null ||objEmpleados.Apellidos==null || objEmpleados.Direccion==null || objEmpleados.Telefono==null ){
      this.mostraAviso("Campo requeridos!","Todo los campos son obligatorios");
      return;
    } 
    
    this.employeesService.AddEmployees(objEmpleados).subscribe((dta) => {
     
        if (dta==="1"){
          this.mostraAviso("Aviso","USUARIO GUARDADO");
          
          this.router.navigate(['/listarEmpleado']);
          
        }else{
          this.mostraAviso("Aviso","Error al crear el empleado");
         
        }
        console.log(dta);
    })
  }


  mostraAviso(Mensaje:String, textos:String):void{
    Swal.fire({
      title: Mensaje,
      text: textos+"",
      icon: 'info',
      confirmButtonText: 'Aceptar'
    })
    return;
  }
}
