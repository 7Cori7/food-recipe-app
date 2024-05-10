

export default function RecipeDetails({recipeDetails, handleAddFavorite, favoritesList}){

    return <div className="flex flex-col gap-3">

    <span>{recipeDetails?.recipe?.publisher}</span>

    <h2 className="capitalize font-bold text-2xl truncate">{recipeDetails?.recipe?.title}</h2>

    <div className="flex flex-col md:gap-10 md:flex-row md:items-baseline">

        <h3>Servings for {recipeDetails?.recipe?.servings}</h3>
        <h3>Cooking time {recipeDetails?.recipe?.cooking_time}min</h3>
        <button
        onClick={()=>handleAddFavorite(recipeDetails?.recipe)}
        className="p-3 px-8 bg-red-400 text-white rounded-2xl hover:scale-105 hover:bg-orange-600 duration-300 transition-all ease-in-out delay-150 tracking-wider inline-block mt-3 shadow-md"
        >
            {
                favoritesList && favoritesList.length > 0 && favoritesList.findIndex(item=> item.id === recipeDetails?.recipe?.id) !== -1 ? 'Remove' : 'Favorite'
            }
        </button>
    </div>

    <div>
        <h3 className="font-bold">Ingredients</h3>
        <ul>
        {
            recipeDetails?.recipe?.ingredients.map((i, index) => (
                <li key={index}>- {i.description}, <span className="font-medium">{i.quantity}{i.unit}</span></li>
            ))
        }
        </ul>
    </div>
</div>
}