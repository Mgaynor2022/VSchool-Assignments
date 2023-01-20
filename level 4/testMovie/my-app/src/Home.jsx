import React,{useContext}from "react"
import {dataContext}  from "./MovieContext"

function Home (props){

    const [homePage] = useContext(dataContext)

    const favoriteMovies = homePage.map(movie => {
        return (
            <div>
                <img src={movie.poster}/>
                <h3>{movie.title}</h3>
                <h3>{movie.released}</h3>
                <h3>{movie.actors}</h3>
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
            <div>
                {favoriteMovies}
            </div>
        </div>
    )
}

export default Home