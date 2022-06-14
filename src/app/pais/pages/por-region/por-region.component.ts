import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ];
  regionActiva: string = '';
  paises: Country[] = [];

//  (European Union)
//  (European Free Trade Association)
//  (Caribbean Community)
//  (Pacific Alliance)
//  (African Union)
//  (Union of South American Nations)
//  (Eurasian Economic Union)
//  (Arab League)
//  (Association of Southeast Asian Nations)
//  (Central American Integration System)
//  (Central European Free Trade Agreement)
//  (North American Free Trade Agreement)
//  (South Asian Association for Regional Cooperation)

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string){
    if (region === this.regionActiva){return}
    this.regionActiva = region;

    this.paises = [];

    this.paisService.buscarPorRegion(this.regionActiva)
      .subscribe((paises) =>{
        this.paises = paises;
      },
      (err) =>{
        this.paises = [];
      })
  }
}
