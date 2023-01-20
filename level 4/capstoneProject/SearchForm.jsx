import React,{useContext} from "react"
import {DataContext } from "./movieApp/src/Components/MovieContext"
import SearchFormDisplay from "./movieApp/src/Components/SearchDisplay"
import Card from "./movieApp/src/Components/Card"


function SearchForm () {

    const {apiData, handleSubmit, handleChange,searchData} = useContext(DataContext)

    return(

        <div>
            <form onSubmit={handleSubmit}>
                <label>Movie Title</label>
                <input 
                type="text"
                name="title"
                value={searchData.title}
                onChange={handleChange}
                placeholder="Movie Title" />

                <label>IMDb Id</label>
                <input 
                type="text"
                name="imdbID" 
                value={searchData.id} 
                onChange={handleChange}
                placeholder="IMDb Id"/>

                <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                    Submit
                </button>
            </form>
            <div>
            {/* <SearchFormDisplay /> */}
            {/* <Card /> */}
            </div>
        </div>
    )


}

export default SearchForm