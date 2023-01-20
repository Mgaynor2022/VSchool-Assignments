import {Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import SearchForm from "./SearchForm"
import MovieContext  from "./MovieContext"
import Reviews from "./Reviews"


function App () {

    return (

        <div>
            <nav>
                <Link to="/Home" style={{padding: 5}}> 
                    Home
                </Link>
                <Link to="/SearchForm" style={{padding: 5}}>
                    Search
                </Link>
            </nav>

            <MovieContext>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/SearchForm" element={<SearchForm/>}/>
                    <Route path="/Reviews" element={<Reviews />} />
                </Routes>
            </MovieContext>
        </div>

    )

}

export default App