import { data } from "autoprefixer"
import React, {useContext} from "react"
import {DataContext}  from "./MovieContext"


function SearchFormDisplay(props) {

    const {apiData,addToFavorites} = useContext(DataContext)

    const displaySearchData = apiData.map(data => {
        return (
            
            <div className="relative w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center ">
                    <img className="bg-cover" src={data.Poster} alt="moviePoster"></img>
                <div>
                    <h3>{data.Actors}</h3>
                    <h3>{data.Genre}</h3>
                    <p>{data.Plot}</p>
                    <h3>{data.Awards}</h3>
                </div>

                <form onSubmit={addToFavorites}>
                    <button onClick={addToFavorites}>Add To Favorites</button>
                </form>
            </div>
        )
    })
    

    return (
        <div>
            {displaySearchData}
        </div>
    )

}

export default SearchFormDisplay

//  <div className="flex flex-wrap flex--movie">

//     <div class="w-full md:w-full lg:w-1/2 max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
//       <div class="md:flex-shrink-0">
//         <img className="md:w-56"
//              src={data.Poster}
//              alt="moviePoster" />
//       </div>
      
//       <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
//         <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">{data.Title}</h3>
//         <span className="movie--year text-xl lg:text-sm lg:mb-4">{data.Year},{data.Genre}</span>
//         <span className="movie--actors text-xl lg:text-sm lg:mb-4">{data.Actors}</span>
//         <span className="movie--awards text-xl lg:text-sm lg:mb-4">{data.Awards}</span>
//         <div className="flex-grow">
//           <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">{data.Plot}</p>
//         </div> 