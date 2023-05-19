import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Array<Banda> = []
  antiguo:Banda | undefined;
  menor: number = 0;
  constructor(private bandaService: BandaService) { }

  getBandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
      this.antiguo = this.bandaService.getAntiguo(bandas)
      this.menor = this.bandaService.getAno(bandas);
    });
  }

  ngOnInit() {
    this.getBandas();
  }

}
