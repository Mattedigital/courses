import axios from 'axios';
import { key, proxy } from '../config';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.image_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
    } catch (error) {
      console.log('Error getting recipe data: ', error);
    }
  }

  calcTime() {
    // Assuming that for every 3 ingredients cooking time increases by 15mins.
    const numIngredients = this.ingredients.length;
    const periods = Math.ceil(numIngredients / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }

  parseIngredients() {
    const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
    const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
    const units = [...unitsShort, 'kg', 'g'];

    const newIngredients = this.ingredients.map(el => {
      // 1. Uniform units
      let ingredient = el.toLowerCase();
      unitsLong.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, unitsShort[i]);
      });

      // 2. Remove paraethesis
      ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

      // 3. Parse ingredients into count, unti & ingrdient
      const arrIngredient = ingredient.split(' ');
      const unitIndex = arrIngredient.findIndex(el2 => units.includes(el2));
      let objIngredient;

      if (unitIndex > -1) {
        // There is a unit
        const arrCount = arrIngredient.slice(0, unitIndex);
        let count;
        if (arrCount.length === 1) {
          count = eval(arrIngredient[0].replace('-', '+'));
        } else {
          count = eval(arrIngredient.slice(0, unitIndex).join('+'));
        }

        objIngredient = {
          count,
          unit: arrIngredient[unitIndex],
          ingredient: arrIngredient.slice(unitIndex + 1).join(' ')
        }

      } else if (parseInt(arrIngredient[0], 10)) {
        // There is NO unit, but 1st element is a number
        objIngredient = {
          count: parseInt(arrIngredient[0], 10),
          unit: '',
          ingredient: arrIngredient.slice(1).join(' '),
        }
      } else if (unitIndex === -1) {
        // There is NO unit & NO number in 1st position
        objIngredient = {
          count: 1,
          unit: '',
          ingredient,
        }
      }
      return objIngredient;

    });
    this.ingredients = newIngredients;
  }

  updateServings (type) {
    const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;
    this.ingredients.forEach(ing => {
      ing.count *= (newServings / this.servings);
    })
    this.servings = newServings;
  }
}
