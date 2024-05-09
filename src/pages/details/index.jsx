import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Globalcontext } from "../../context"
import Spinner from "../../components/spinner";


export default function Details(){

    const params = useParams();
    const {recipeDetails, setRecipeDetails, loading, setLoading} = useContext(Globalcontext);

    async function getRecipeDetails(){
        try {

            setLoading(true);

            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`);
            const data = await res.json();

            if(data?.data?.recipe){
                setLoading(false);
                setRecipeDetails(data.data.recipe);
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRecipeDetails();
    }, [params]);

    if(loading){
        return <div className="flex justify-center items-center mt-20">
            <Spinner />
        </div>
    }
    return <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="row-start-2 lg:row-start-auto">
            <div className="h-96 overflow-hidden rounded-xl group">
                <img src={recipeDetails.image_url} alt="recipe image" className="w-full h-full object-cover group-hover:scale-105 duration-300" />
            </div>
            <div className="mt-10 text-3xl font-bold text-red-400 hover:text-orange-600 transition-all ease-out duration-300 delay-150">
                <a href={recipeDetails.source_url} target='_blank'>Check the recipe here</a>
            </div>
        </div>
        <div className="flex flex-col gap-3">

            <span>{recipeDetails.publisher}</span>

            <h2 className="capitalize font-bold text-2xl truncate">{recipeDetails.title}</h2>

            <div className="flex flex-col md:gap-10 md:flex-row md:items-baseline">

                <h3>Servings for {recipeDetails.servings}</h3>
                <h3>Cooking time {recipeDetails.cooking_time}min</h3>
                <button className="p-3 px-8 bg-red-400 text-white rounded-2xl hover:scale-105 hover:bg-orange-600 duration-300 transition-all ease-in-out delay-150 tracking-wider inline-block mt-3 shadow-md"> Favorite</button>
            </div>

            <div>
                <h3 className="font-bold">Ingredients</h3>
                <ul>
                {
                    recipeDetails.ingredients.map((i, index) => (
                        <li key={index}>- {i.description}, <span className="font-medium">{i.quantity}{i.unit}</span></li>
                    ))
                }
                </ul>
            </div>
        </div>
    </div>
}