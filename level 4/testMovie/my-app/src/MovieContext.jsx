import React, { createContext, useState, useEffect} from 'react'
import axios from "axios"



export const dataContext = createContext()

export default function MovieContext(props) {
  

  const [homePage, setHomePage] = useState([
    {
      title:"Malcolm X",
      actors: "Denzel Washington, Angela Bassett, Delroy Lindo",
      released:"18 Nov 1992",
      poster:"https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    },
    {
      title:"Training Day",
      actors: "Denzel Washington, Ethan Hawke, Scott Glenn", 
      released: "05 Oct 2001",
      poster: "https://m.media-amazon.com/images/M/MV5BZDkzOTFmMTUtMmI2OS00MDE4LTg5YTUtODMwNDMzNmI5OGYwL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      title: "Ali",
      actors: "Will Smith, Jamie Foxx, Jon Voight",
      released: "25 Dec 2001",
      poster: "https://m.media-amazon.com/images/M/MV5BZjA3OTUxNTktN2FlNC00NGUyLWI1NDktY2FlZTc5MDlmOGFhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }

  ])
  // t = movie search by title
  // i = movie search by IMDb ID
  const [searchData, setSearchData] = useState({
    title:"",
    id:""
  })

  function handleChange(e){
    const [name, value] = e.target
    setSearchData(prevSearch => {
      return{
        ...prevSearch,
        [name]:value
      }
    })
  }
  
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?t=${searchData.title}+day&apikey=9d97bb4b`)
    .then((res) => setSearchData(prevSearch => [...prevSearch, res.data]))
    .catch(error => console.log(error)) 
  },[])  
  
  const [movieReviews, setMovieReviews] = useState([])

  
  return (
    <MovieContext.Provider value={{
      homePage, searchData, setSearchData, handleChange
      
    }}>
      {props.children}

    </MovieContext.Provider>
  )
}