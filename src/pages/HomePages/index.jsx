import React from "react"
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'
import About from "../../components/About"
import AppFgCart from "../../components/AppFgCart"
import ClandCart from "../../components/ClandCart"
import Hero from "../../components/Hero"
import Download from "../../components/Download"
import AppInterface from "../../components/AppInterface"
import AppFeatures from "../../components/AppFeatures"
import AppDowolond from '../AppNow'
import UseApp from "../UseApp"
import OutTeam from '../OutTeam'
import Blog from '../Blog/Blog'



 const HomePages = ()=>{
    return(
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <AppFeatures></AppFeatures>
            {/* <AppFgCart></AppFgCart> */}
            <AppInterface></AppInterface>
            {/* <  ></ClandCart> */}
            <AppDowolond/>
            <UseApp/>
            <OutTeam/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default HomePages