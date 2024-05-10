import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Globalcontext = createContext(null);


export default function GlobalState({children}){

    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);

    async function handleSubmit(e){

        e.preventDefault();

        if(searchParam === ''){
            return;
        }

        try {

            setLoading(true);

            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);

            const data = await res.json();

            if(data?.data?.recipes){
                setRecipeList(data.data.recipes);
                setLoading(false);
                setSearchParam('');
            }

           navigate('/');
            
        } catch (error) {
            console.log(error);
            setLoading(false);
            setSearchParam('');
        }  
    };

    const navigate = useNavigate();

    function handleAddFavorite(currentItem){
        
        // we copy the favorite list
        let copyFavList = [...favoritesList];
        
        // we check the index in the array
        const index = copyFavList.findIndex(item => item.id === currentItem.id);

        // if the index does not exist in the array:
        if(index === -1){
            copyFavList.push(currentItem); // <--we add it to the array
        }
        // else if it already exist:
        else {
            copyFavList.splice(index); // <--we remove it form the array
        }

        setFavoritesList(copyFavList);
    }

    return <Globalcontext.Provider value={
        {
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeList,
        loading,
        recipeDetails,
        setRecipeDetails,
        handleAddFavorite,
        favoritesList
        } }>
        { children }
    </Globalcontext.Provider>
}