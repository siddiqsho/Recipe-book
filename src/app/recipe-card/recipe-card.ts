import { Component,Input} from '@angular/core';
import { IRecipe } from '../shared/interfaces/resipe.interfaces';
import { SlicePipe } from '@angular/common';

@Component({
  imports: [SlicePipe],
  selector: 'app-recipe-card',
  styleUrl: './recipe-card.css',
  templateUrl: './recipe-card.html',
})
export class RecipeCard {
  @Input () recipe !: IRecipe 


  flipper:boolean=false;

  flipperCard(){
    this.flipper = !this.flipper
  }
}
