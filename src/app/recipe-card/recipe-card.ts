import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-recipe-card',
  styleUrl: './recipe-card.css',
  templateUrl: './recipe-card.html',
})
export class RecipeCard {
  @Input () recipe:any

  shorted(text:string){
    if(text.length >70){
      return text.slice(0,70)+'...'
     }
     return text
  }
}
