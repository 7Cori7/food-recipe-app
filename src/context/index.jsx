import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Globalcontext = createContext(null);


export default function GlobalState({children}){

    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetails, setRecipeDetails] = useState(null);

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

    return <Globalcontext.Provider value={ {searchParam, setSearchParam, handleSubmit, recipeList, loading, setLoading, recipeDetails, setRecipeDetails} }>
        { children }
    </Globalcontext.Provider>
}