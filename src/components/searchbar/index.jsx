import { useContext } from "react";
import { Globalcontext } from "../../context";


export default function SearchBar(){

    const {searchParam, setSearchParam, handleSubmit} = useContext(Globalcontext);

    return <form onSubmit={handleSubmit}>

            <input type="text" name="search"  placeholder="Enter item..."
            value={searchParam}
            onChange={(e)=>setSearchParam(e.target.value)}
            className="bg-white/75 p-3 px-8 rounded-full outline-none w-full lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
            />

        </form>

}