export interface IRecipe{
    title:string,
    image:string,
    description:string,
    ingredients:IIngredients[]
}

 export interface IIngredients{
    name:string,amount:string
}