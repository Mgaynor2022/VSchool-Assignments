import React,{useContext}from "react"
import {DataContext} from "./MovieContext"

function Home (props){

    const {homePage} = useContext(DataContext)
 

    const favoriteMovies = homePage.map(movie => {
      
        return (

            <div className="flex justify-center p-10 flex--movie hover:scale-110">
            <div className="w-full md:w-full lg:w-1/2 max-w-4xl rounded shadow-lg m-4 flex ">
            <div className="md:flex-shrink-0">
                <img className="md:w-56 "
                    src={movie.poster}
                    alt="moviePoster" />
                    </div>
                        <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
                            <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">{movie.Title}</h3>
                            <span className="movie--year text-xl lg:text-sm lg:mb-4">
                                {movie.year}, {movie.genre}</span>
                            <span className="movie--actors text-xl lg:text-sm lg:mb-4">
                                {movie.actors}</span>
                            <span className="movie--awards text-xl lg:text-sm lg:mb-4">
                                {movie.awards}</span>
                            <div className="flex-grow">
                            <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">{movie.plot}</p>
                            </div> 
                    </div>
                        </div>
                            </div>

    



        )
    })

    return(

        <div>
            <header>
                <h1>Welcome To The Movie App</h1>
            </header>
            <main>
                <p>Once in everyone's life they have asked a friend for a movie recommendation
                , or was recommended to watch a particular movie. Our response were "Well Is It Good ?",
                im here to answer that question. I developed a movie app that lets you search for
                movies and in return receive information about that movie, that will help you determine
                if said movie is good or not.
                </p>
            </main>
            <div className="">
                {favoriteMovies}
            </div>
        </div>
    )
}

export default Home