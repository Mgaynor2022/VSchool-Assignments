import React from "react"
import data from "./data"
import Location from "./components/location"
import Header from "./components/header"
import '../src/style.css'

export default function App() {
    const location = data.map(item =>{
        return(
            <Location 
                    key={item.id}
                    imageUrl={item.imageUrl}
                    location={item.location}
                    url={item.googleMapsUrl}
                    title={item.title}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    description={item.description}
            />
        )
    }) 
    return (
        <div>
            <Header />
            <section className="places">
                {location}
            </section>
        </div>
    )
}
