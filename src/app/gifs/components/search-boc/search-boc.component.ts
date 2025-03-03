import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-boc',
  templateUrl: './search-boc.component.html',
})
export class SearchBocComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  // public searchTag(newTag: string): void{
  //   console.log(newTag);
  // }
  public searchTag(): void{
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
