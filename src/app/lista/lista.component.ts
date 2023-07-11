import { Component } from '@angular/core';
import { Product } from '../products';
import { style } from '@angular/animations';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  
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

  hideShow:boolean = true;

}
