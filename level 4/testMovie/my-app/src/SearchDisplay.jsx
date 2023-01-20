import React, {useContext} from "react"
import {dataContext}  from "./MovieContext"


function SearchFormDisplay() {

    const [searchData] = useContext(dataContext)

    const displaySearchData = searchData.map(data => {
        return (
            <div>
                <img src={data.poster} alt="moviePoster"></img>
                <h3>{data.actors}</h3>
                <h3>{data.genre}</h3>
                <p>{data.plot}</p>
                <h3>{data.awards}</h3>
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