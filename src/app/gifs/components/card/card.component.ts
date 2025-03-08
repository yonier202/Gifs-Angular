import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/interfaces/gifs.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
      if(!this.gif) throw new Error('Gif property isrequired')
  }

}
