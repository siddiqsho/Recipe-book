import { Component } from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';
import { recipes, IRecipe } from './resipeArr';

@Component({
  imports: [RecipeCard],
  selector: 'app-menu-list',
  styleUrl: './menu-list.css',
  templateUrl: './menu-list.html',
})
export class MenuList {
   recipesMenu:IRecipe[]=recipes
}
