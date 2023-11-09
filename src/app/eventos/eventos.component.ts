import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/Evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventos: any;

  constructor(private http: HttpClient) {}

  ngOnInit(){
   this.getEventos();
  }

  public getEventos() {
     this.http.get('https://localhost:5001/api/evento')
    .subscribe(
      {
      next: (response: any) => {
        this.eventos = response
      }, error: (err: any) => {
        console.log(err)
      }
     }
    );

  }



}
