import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { EventosComponent } from '../eventos/eventos.component';

@Component({
  selector: 'app-palestrantes',
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.css']
})
export class PalestrantesComponent implements AfterViewInit {

  public isChecked!: boolean;
  public checkBoxResult: any;

  constructor() { }

  ngAfterViewInit() {
  }

  ngOnInit() {
    // this.checkBoxResult =  <HTMLInputElement> document.getElementById('check');
    // this.isChecked = this.checkBoxResult.checked

  }

  reciverFeeback(resposta: string | boolean) {
    console.log('Resposta do componente filho', resposta);
    if(resposta == ""){
      this.checkBoxResult.checked = false;
    }else {
      this.checkBoxResult.checked = true;
    }
  }


}
