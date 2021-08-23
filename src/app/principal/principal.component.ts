import { estudiante } from './../entidades/estudiantes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario:estudiante = {} as estudiante;
  usuarios:any;
  //id: string | null;

  constructor( private http: HttpClient,  private activerouter:ActivatedRoute, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) { 

    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{this.usuarios=response});

  }

  cargar(): void{
    this.http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{this.usuarios=response});

  }


  enviarPos():void {
    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar', this.usuario)
    .subscribe(Response => {
      console.log(Response); 
      this.usuario={}as estudiante; window.location.reload();
    })
  }

  //obtener1
  getUno(id:number):void{
    this.http.get("ttps://frozen-meadow-48728.herokuapp.com/uno/"+id)
  }

  //editar
  editar(id:number){
    
    this.http.get<estudiante>("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
    .subscribe(
      response => {
        this.usuario=response;
        //this.router.navigate(['/crear-estudiante'])
        
      },
      error => {
        console.log(error);
      });
  }

 //eliminar
 eliminar(id:number): void {
  if (confirm('¿Estas seguro de eliminar este estudiante?')) {
    this.http.delete<estudiante>('https://frozen-meadow-48728.herokuapp.com/eliminar/' + id)
    .subscribe(
      response => {
       alert('Estudiante eliminado');
       window.location.reload();
      },
      error => {
        console.log(error);
      });
    }
}







  ngOnInit(): void {
  }

}

