import { Component } from '@angular/core';
import { Product } from '../products'; /* Esta es mi interface */

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  /* Lista de productos para mostrar */
  productos: Product[] = [
    {nombres: 'CPU AMD RYZEN 5 4600G 4.2G', costos: '$76.199'},
    {nombres: 'KINGSTON FURY BEAST DDR5 16GB', costos: '$78.990'},
    {nombres: 'ASUS PRIME A620M-A CSM AM5', costos: '$81.849'},
    {nombres: 'LEXAR 256GB NM620 M.2 NVME', costos: '$13.999'},
    {nombres: 'CORSAIR 550W CX550F 80+ BRONZE', costos: '$40.990'},
    {nombres: 'POWERCOLOR AMD RADEON RX 6700 XT', costos: '$229.999'},
    {nombres: 'GABINETE THERMALTAKE AH T200', costos: '$109.990'},
    {nombres: 'WATER COOLER REDRAGON EFFECT', costos: '$51.990'},
    {nombres: 'LOGITECH G G413 SE MECANICO TKL', costos: '$40990'},
    {nombres: 'LOGITECH G G502X', costos: '$52.990'},
  ];

  /* Variable que nos modifica la visibilidad de la lista */
  hideShow:boolean = true;

}
