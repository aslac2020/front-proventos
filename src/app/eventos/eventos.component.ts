import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Evento } from '../models/Evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  @Output() resultRespost = new EventEmitter();

  public eventos: any = [];
  public eventosFiltrados: any = [];
  public isImgOpened!: boolean;
  public valueInputText!: string;
  public valueInputTextEnglish!: string;
  public isValueInputText!: boolean;
  private _filtroLista: string = '';

  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value:string){
    console.log(value)
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

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
        this.eventosFiltrados = this.eventos
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


  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento:any) => evento.tema.toLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLowerCase().indexOf(filtrarPor) !== -1
    );
  }








}
