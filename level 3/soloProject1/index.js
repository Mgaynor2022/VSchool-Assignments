import React from "react"
import ReactDOM from "react-dom"
import '../src/style.css';


function Page() {
    return(
        <div className="container">
            <header className="contact">
                <div className="img" ></div>
                <h1>Michael Gaynor</h1>
                <h2>Web Developer</h2>
                <h4>MichaelGaynor.com</h4>
            </header>
            <div className="buttons">
                <button>Email</button>
                <button>Linkedin</button>
            </div>
            <main className="about">
                <h1>About</h1>
                <p> Have you ever felt that you were filled with creativity but didn’t know how to express that to the world? 
                    I felt that until I became a Full Stack Web Developer. The enjoyment I feel seeing my long hours of coding
                     and research come to life for the world to engage with is what I appreciate the most about Web Development.
                      I could be coding a simple text-based RPG game to a fully functioning web application, it gives me the same 
                      fulfillment. My natural eagerness to learn new things, such as different software programs or techniques to 
                      obtain the optimal solution, helps me overcome the problems I face as a Web Developer.</p>
                      <h1>Interest</h1>
                      <p>When I'm not coding, you'll find me in the gym as I have a burning passion for fitness; it keeps me feeling energized, 
                        relieves me of stress, and keeps me in an overall better mood. But I'm at my best when I'm in a role that lets me positively 
                        impact people through my creativity and adaptability.</p>
            </main>
            <footer className="icons">

            </footer>
        </div>
    )
}
ReactDOM.render(<Page/>, document.getElementById("root"))
