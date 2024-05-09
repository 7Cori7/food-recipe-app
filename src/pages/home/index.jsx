import { useContext } from "react"
import { Globalcontext } from "../../context"
import RecipeItem from "../../components/recipe-item";
import Spinner from "../../components/spinner";


export default function Home(){

    const {recipeList, loading} = useContext(Globalcontext);

    return <div className="py-8 container mx-auto flex flex-wrap flex-col items-center justify-center gap-5">
        {
            loading && <Spinner />
        }
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {
                recipeList && recipeList.length > 0 && !loading
                ? recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
                : <div>
                    <p>Nothing to show yet. Please search for a recipe</p>
                </div>
            }
        </div>
    </div>
}