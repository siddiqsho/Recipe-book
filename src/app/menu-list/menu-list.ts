import { Component } from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';
import { IRecipe } from '../shared/interfaces/resipe.interfaces';
import { RESIPES } from '../shared/constants/recipe.constans';

@Component({
  imports: [RecipeCard],
  selector: 'app-menu-list',
  styleUrl: './menu-list.css',
  templateUrl: './menu-list.html',
})
export class MenuList {
   recipesMenu:IRecipe[]=RESIPES
}
