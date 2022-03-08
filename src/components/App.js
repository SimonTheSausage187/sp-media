import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Route from "../Routing/Route";
import AutoForward from "../Routing/AutoForward";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Projects from "./Pages/Projects";
import Tools from "./Pages/Tools";
import GetInTouch from "./Pages/GetInTouch";
import LoremIpsum from "./Testing/LoremIpsum";
import Footer from "./Elements/Footer"

class App extends React.Component {

    NavbarFields =  ['@Home','Gallery','Projects','Tools','Get-in-Touch','@Theme'];

    constructor(props){
        super(props)
        this.state = {
            darkMode: true,
            active: window.location.pathname
        }
    }

    componentDidMount() {
        this.updateActive();
        window.addEventListener('popstate', this.updateActive);
    }

    toggleTheme = () => {
        this.setState({darkMode: !this.state.darkMode});
        return this.state.darkMode;
    }

    updateActive = () => {
        const newActive = ((window.location.pathname).substring(1) === "Home") ? '@Home' : (window.location.pathname).substring(1);
        this.setState({active: newActive});
    }

    render(){

    return(
        <div className={`ui ${this.state.darkMode ? 'inverted' : ''} basic segment`}>
            <Navbar NavbarFields={this.NavbarFields} activeItem={this.state.active} style={this.styles} darkMode={this.state.darkMode} toggleTheme={this.toggleTheme}/>

            <div className="ui tiny menu"></div> {/** Spacer for Header*/}


            <div>
                    
            <Route path="/">
                <AutoForward href="/Home"/>
            </Route>
            <Route path="/Home">
                <Home darkMode={this.state.darkMode}/>
            </Route>
            <Route path="/Gallery">
                <Gallery darkMode={this.state.darkMode}/>
            </Route>
            <Route path="/Projects">
                <Projects darkMode={this.state.darkMode}/>
            </Route>
            <Route path="/Tools">
                <Tools darkMode={this.state.darkMode}/>
            </Route>
            <Route path="/Get-in-Touch">
                <GetInTouch darkMode={this.state.darkMode}/>
            </Route>



            <LoremIpsum />
            <Footer darkMode={this.state.darkMode}/>
            </div>
            

        </div>
        )
    }
}

export default App;