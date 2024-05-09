import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar";



export default function Navbar(){

    return <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">

        <NavLink to={'/'}>
            <h2 className="text-2xl font-semibold">Food Recipe</h2>
        </NavLink>

        <SearchBar />

        <ul className="flex gap-5">
            <li><NavLink to={'/'} className='hover:text-gray-400 duration-300'>Home</NavLink></li>
            <li><NavLink to={'/favorites'} className='hover:text-gray-400 duration-300'>Favorites</NavLink></li>
        </ul>
    </nav>
}