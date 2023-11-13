import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Evento } from '../models/Evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventos: any = [];
  public isImgOpened!: boolean;
  public valueInputText!: string;
  public valueInputTextEnglish!: string;
  public isValueInputText!: boolean;
  filtroLista: string = '';


  @Output() resultRespost = new EventEmitter();

  constructor(private http: HttpClient) {}


  ngOnInit(){
   this.getEventos();
  //  console.log("Objeto recebido pelo pai ")
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

  valueText(event: any){
    var result = event.target.value
    if(result == null){
      this.resultRespost.emit(result);
    }else {
      this.resultRespost.emit(result);
    }

   //this.valueInputText = event.target.value;

  }

  valueTextEnglish(event: any){
    var result = event.target.value
    if(result == null){
      this.resultRespost.emit(result);
    }else {
      this.resultRespost.emit(result);
    }

  }







}
