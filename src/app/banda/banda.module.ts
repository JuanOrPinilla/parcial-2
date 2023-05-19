import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandaListComponent} from './banda-list/banda-list.component';
import { BandaDetailComponent } from './banda-detail/banda-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BandaListComponent],
  declarations: [BandaListComponent,BandaDetailComponent]
})
export class BandaModule { }
