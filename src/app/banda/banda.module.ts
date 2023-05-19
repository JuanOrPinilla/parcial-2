import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandaListComponent} from './banda-list/banda-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BandaListComponent],
  declarations: [BandaListComponent]
})
export class BandaModule { }
