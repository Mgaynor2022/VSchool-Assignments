import { Routes, Route, Link} from "react-router-dom"
import Home from './Home'
import About from './About'
import Services from './Services'
import './App.css'

function App() {
  

  return (
    <div className="App">
        <nav style={{margin:10}}>
                <Link to= "/Home" style={{padding: 5}}>
                    Home
                </Link>

                <Link to="/About" style={{padding: 5}}>
                    About
                </Link>

                <Link to="/Services" style={{padding: 5}}>
                    Services
                </Link>

            </nav> 
             <Routes>
                <Route index element={<Home />}/>
                <Route path="About" element={<About />}/>
                <Route path="Services" element={<Services />}/>
            </Routes> 
      
    </div>
  )
}

export default App
