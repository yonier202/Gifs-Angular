import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBocComponent } from './components/search-boc/search-boc.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBocComponent,
    CardListComponent,
    CardComponent
  ],
  exports:[
    HomePageComponent,
    SearchBocComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
