import {Routes, Route, Link} from "react-router-dom"
import Home from "./Components/Home"
import SearchForm from "../../SearchForm"
import MovieContext  from "./Components/MovieContext"
import Reviews from "./Components/Reviews"
import SearchStyle from "./Components/SearchStyle"
import Favorites from "./Components/Favorites"



function App () {

    return (
        <div>
            <div>
                <nav className="flex p-5">
                <Link to="/Home" style={{padding: 5}}> 
                    Home
                </Link>
                <Link to="/SearchStyle" style={{padding: 5}}>
                    Search
                </Link>
                 {/* <Link to="Reviews" style={{padding: 5}}>
                    Reviews
                </Link>  */}
                 <Link to="/Favorites" style={{padding: 5}}>
                    Favorites
                </Link> 
            </nav>
            

            <MovieContext>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/Home" element={<Home />} />
                    {/* <Route path="/SearchForm" element={<SearchForm/>}/> */}
                    <Route path="searchStyle" element={<SearchStyle />}/>
                    {/* <Route path="/Reviews" element={<Reviews />} /> */}
                    <Route path="/Favorites" element={<Favorites />}/>
                </Routes>
            </MovieContext>

            </div>
        </div>

    )

}

export default App

