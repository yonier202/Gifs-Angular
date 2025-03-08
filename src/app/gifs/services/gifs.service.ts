import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagHistory: string[] =  [];
  private apiKey: string = 'oOoKe6vjPwl6VqilHc81WFMOlVaekvBa';
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) {
    this.getHistoryFromLocalStorage();
  }

  get tagsHistory(){
    return [...this._tagHistory];
  }

  private OrganizeHistory(tag: string){
    tag = tag.toLowerCase();

    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private getHistoryFromLocalStorage(): void{
    const history = localStorage.getItem('history');
    if(history){
      this._tagHistory = JSON.parse(history);
    }
    //llmar el primer resulto guardado en el local storage
    if(this._tagHistory.length === 0) return;
    this.searchTag(this._tagHistory[0]);
  }

  searchTag(tag:string): void {
    if(tag.length == 0) return;
    this.OrganizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

      this.http.get<SearchResponse>(`${this.apiUrl}/search`, {params})
      .subscribe( res=> {
        this.gifList = res.data;
      } )
  }

}
