import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  tagsHistori: string[] = [];

  constructor(private gifsServie: GifsService) { }

  get tags(){
    return this.gifsServie.tagsHistory;
  }



}
