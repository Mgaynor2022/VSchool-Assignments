import React,{useContext} from "react"
import {dataContext}  from "./MovieContext"


function SearchForm () {

    const [searchData, movieData, handleChange] = useContext(dataContext)

    return(

        <div>
            <form onSubmit={movieData}>
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

                <button>Submit</button>
            </form>
        </div>
    )


}

export default SearchForm