export const modificationData = (data) => {

    const ingredientsArray = [];
    for (let i = 1; i <= 10; i++) {
      const ingredient = data[`strIngredient${i}`];
      if (ingredient) {
        ingredientsArray.push(ingredient);
      }
    }

    const tagsArray = data.strTags ? data.strTags.split(',').map(tag => tag.trim()) : [];

    const mealData = {
        name: data.strMeal,
        description: data.strInstructions,
        image:  data.strMealThumb, 
        ingredients: ingredientsArray,
        tags: tagsArray.length > 0 ? tagsArray : null
      };
      
    return mealData
}