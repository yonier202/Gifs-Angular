import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  tagsHistori: string[] = [];

  constructor(private gifsServie: GifsService) { }

  get tags(): string[] {
    return this.gifsServie.tagsHistory;
  }

  public ResearchTag(newButton: string): void{
    this.gifsServie.searchTag(newButton);
  }

}
