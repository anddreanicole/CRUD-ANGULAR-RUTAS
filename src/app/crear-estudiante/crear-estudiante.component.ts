import { estudiante } from './../entidades/estudiantes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {

  usuario:estudiante = {} as estudiante;
  usuarios:any;
  loading = false;
  titulo='Agregar estudiante';
  id: string | null;
  
  //registro = 'Agregar Estudiante';



  constructor(
    private http: HttpClient,
              private aRoute: ActivatedRoute,
              private router: Router,  private toastr: ToastrService
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  
  enviarPos():void {
    this.loading=true;
    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar', this.usuario)
    .subscribe(Response => {
      console.log(Response);
      this.toastr.success('Estudiante registrado exitosamente!, Registrado'
      
      );
      this.loading=false;
      this.router.navigate(['/list-estudiantes']) 
      this.usuario={}as estudiante; 
    })
  }

  //obtener1
  getUno(id:number):void{
    this.http.get("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
  }

  //editar
  editar(id:number){
    this.titulo='Editar empleado'
    this.http.get<estudiante>("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
    .subscribe(
      response => {
        //this.router.navigate(['/crear-estudiante'])
        this.usuario=response;
        
      },
      error => {
        console.log(error);
      });


  }

  editarRegistro() : void{
    
    if (this.id === null) {
      this.titulo = 'Agregar Estudiante'
    } else {
      this.titulo= 'Editar Estudiante'
    }
    this.http.get<estudiante>("https://frozen-meadow-48728.herokuapp.com/uno/"+this.id)
    .subscribe(
      response => {
        this.usuario=response;
      },
      error => {
        console.log(error);
      });

  }

  ngOnInit(): void {

    this.editarRegistro();
  }


}


  


