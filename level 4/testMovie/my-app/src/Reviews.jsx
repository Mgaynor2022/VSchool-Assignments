import React, {useContext} from "react"
import {dataContext}  from "./MovieContext"


function Reviews() {

    const [searchData] = useContext(dataContext)

    const reviewsDisplay = searchData.map(review => {
        return (
            <div>
                <h2>Here Are The Critics Ratings</h2>
                <h3>{searchData.ratings.source}</h3>
                <h3>{searchData.ratings.value}</h3>
            </div>
        )
    })

}

export default Reviews