import { data } from "autoprefixer"
import React, {useContext} from "react"
import {DataContext}  from "./MovieContext"
import Reviews from "./Reviews"


function Card (props) {

    const {apiData,addToFavorites} = useContext(DataContext)

    const displaySearchData = apiData.map(data => {
        console.log(data, "TEST")
        return (
            
             <div className="movie-container flex flex-wrap flex--movie hover:scale-110">
                <div className="w-full md:w-full lg:w-1/2 max-w-4xl rounded shadow-lg m-4 flex ">
                <div className="md:flex-shrink-0">
                    <img className="md:w-56 "
                        src={data.Poster}
                        alt="moviePoster" />
                        </div>

                            <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
                                <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">{data.Title}</h3>
                                <span className="movie--year text-xl lg:text-sm lg:mb-4">
                                    {data.Year}, {data.Genre}</span>
                                 <span className="movie--actors text-xl lg:text-sm lg:mb-4">
                                    {data.Actors}</span>
                                <span className="movie--awards text-xl lg:text-sm lg:mb-4">
                                    {data.Awards}</span>
                                <div className="flex-grow">
                                <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">{data.Plot}</p>
                                <button onClick={() => addToFavorites(apiData)}>Add To Favorites</button>
                                
                                </div> 
                         </div>
                            </div>
                                <div>
                                    {/* <Reviews /> */}
                                </div>
                                     </div>
        )
    })
    
    return (
        <div className="">
            {displaySearchData}
        </div>
    )

}

export default Card
