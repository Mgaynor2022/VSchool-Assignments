import React,{useContext} from "react"
import { DataContext } from "./MovieContext"


 function Favorites() {

    const {favorites,deleteFavorite} = useContext(DataContext)
    console.log(favorites, "comparing")
    // const displayFavorites = favorites.map(data => {
    //     return (
            
    //         <div  className="flex flex-wrap flex--movie hover:scale-110">
    //             <div className="w-full md:w-full lg:w-1/2 max-w-4xl rounded shadow-lg m-4 flex ">
    //             <div className="md:flex-shrink-0">
    //                 <img className="md:w-56 "
    //                     src={data[0]?.Poster}
    //                     />
    //                     </div>

    //                         <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
    //                             <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">{data[0]?.Title}</h3>
    //                             <span className="movie--year text-xl lg:text-sm lg:mb-4">
    //                                 {data[0]?.Year}, {data[0]?.Genre}</span>
    //                              <span className="movie--actors text-xl lg:text-sm lg:mb-4">
    //                                 {data[0]?.Actors}</span>
    //                             <span className="movie--awards text-xl lg:text-sm lg:mb-4">
    //                                 {data[0]?.Awards}</span>
    //                             <div className="flex-grow">
    //                             <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">{data[0]?.Plot}</p>
    //                             <button onClick={() => deleteFavorite(data[0]?.imdbID)}>Remove From Favorites</button>
    //                             </div> 
    //                      </div>
    //                         </div>
    //                             {/* <div>
    //                                 <Reviews />
    //                             </div> */}
    //                                  </div>
    //     )
    // })
    
    return (
        <div>
            {/* {displayFavorites} */}
            {favorites.map(data => (

            
                <div  className="flex flex-wrap flex--movie hover:scale-110">
                    <div className="w-full md:w-full lg:w-1/2 max-w-4xl rounded shadow-lg m-4 flex ">
                        <div className="md:flex-shrink-0">
                            <img className="md:w-56 "
                                src={data[0]?.Poster}
                                />
                        </div>

                        <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
                            <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">{data[0]?.Title}</h3>
                            <span className="movie--year text-xl lg:text-sm lg:mb-4">
                                {data[0]?.Year}, {data[0]?.Genre}</span>
                            <span className="movie--actors text-xl lg:text-sm lg:mb-4">
                                {data[0]?.Actors}</span>
                            <span className="movie--awards text-xl lg:text-sm lg:mb-4">
                                {data[0]?.Awards}</span>
                            <div className="flex-grow">
                            <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">{data[0]?.Plot}</p>
                            <button onClick={() => deleteFavorite(data[0]?.imdbID)}>Remove From Favorites</button>
                            </div> 
                        </div>
                    </div>      
                </div>

            ))}
        </div>

    )
}

export default Favorites