import { Component } from '@angular/core';
import { ListaProductosService } from '../services/lista-productos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  constructor(public productServices:ListaProductosService){}

  /* Variable que nos modifica la visibilidad de la lista */
  hideShow:boolean = true;

  showList(){
    this.hideShow = !this.hideShow
  }

}
