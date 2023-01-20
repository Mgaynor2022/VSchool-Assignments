import React from "react";
import data from "./data";
import Post from "./components/blogPost"
import List from "./components/blogList"
import Navbar from "./components/navbar";
import Header from "./components/header";
import '../src/style.css'

export default function App () {
    const post = data.map(item =>{
        return (
            <Post
            title = {item.title}
            subTitle = {item.subTitle}
            author = {item.author}
            date = {item.date}
            />

        )
    })
    return (
        <div>
            <Navbar />
            <Header />
            <section>
                {post}
                <List />
            </section>
        </div>
        
    )
}