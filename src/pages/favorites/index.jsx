import { useContext } from "react"
import { Globalcontext } from "../../context"
import RecipeItem from "../../components/recipe-item";

export default function Favorites(){

    const {favoritesList} = useContext(Globalcontext);

    return <div className="py-8 container mx-auto flex flex-wrap flex-col items-center justify-center gap-5">

        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {
                favoritesList && favoritesList.length > 0
                ? favoritesList.map((item, index) => <RecipeItem key={index} item={item} />)
                : <div>
                    <p className="text-center">You don't have any favorite recipes yet</p>
                </div>
            }
        </div>
    </div>
}