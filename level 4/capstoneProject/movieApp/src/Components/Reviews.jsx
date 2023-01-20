import React, {useContext} from "react"
import {DataContext}  from "./MovieContext"


function Reviews() {

    const {apiData} = useContext(DataContext)

    const reviewsDisplay = apiData.map(review => {
        return (
            <div>
                <h1>Here Are The Critics Ratings</h1>
                <h3>{review.Title}</h3>
                {review.Ratings.map(rating => {
                    return (
                        <div>
                            <h3>{rating.Source}</h3>
                            <h3>{rating.Value}</h3>
                        </div>
                    )
                })}
            </div>
           
        )
    })
    console.log(reviewsDisplay, "reviews")

    return (
        <div>
            {reviewsDisplay}
        </div>
    )

}

 export default Reviews

 

