import { Link } from "react-router-dom";


export default function RecipeItem({item}){

    return <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">

        <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
            <img src={item.image_url} alt="recipe item" className="block w-full" />
        </div>
        
        <div>
            <span className="text-sm">{item.publisher}</span>

            <h3 className="font-medium text-xl truncate">{item.title}</h3>

            <Link to={`/recipe-item/${item.id}`} className="font-medium text-red-300 hover:text-orange-500 duration-300 transition-all ease-in-out delay-150 mt-10">Recipe Details</Link>
        </div>
    </div>
}