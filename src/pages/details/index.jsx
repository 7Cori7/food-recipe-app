import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Globalcontext } from "../../context"
import RecipeDetails from "../../components/recipe-details";


export default function Details(){

    const {id} = useParams();
    const {recipeDetails, setRecipeDetails, handleAddFavorite, favoritesList} = useContext(Globalcontext);

    async function getRecipeDetails(){
        try {

            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await res.json();

            if(data?.data){
                setRecipeDetails(data?.data);
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        
        getRecipeDetails(); 
    }, []);

    return <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="row-start-2 lg:row-start-auto">
            <div className="h-96 overflow-hidden rounded-xl group">
                <img src={recipeDetails?.recipe?.image_url} alt="recipe image" className="w-full h-full object-cover group-hover:scale-105 duration-300" />
            </div>
            <div className="mt-10 text-3xl font-bold text-red-400 hover:text-orange-600 transition-all ease-out duration-300 delay-150">
                <a href={recipeDetails?.recipe?.source_url} target='_blank'>Check the recipe here</a>
            </div>
        </div>
        {/* Had to make this separate component because otherwise it was throwing me an error every time the page refreshed */}
        {
            recipeDetails !== null ? <RecipeDetails recipeDetails={recipeDetails} handleAddFavorite={handleAddFavorite} favoritesList={favoritesList} /> : null
        }
    </div>
}