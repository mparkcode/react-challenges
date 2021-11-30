import React from "react";
import css from './css/NavBarSimple.module.css'

class NavBarSimple extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Hello, guest!",
            buttonText: "log in"
        }
    }

    handleClick(){
        this.setState((prevState, prevProps) => {
            return{
                name: prevState.name === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText == "log in" ? "log out" : "log in"
            }
        })
    }

    render(){
        return(
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.name}</span>
                <button onClick={() => {this.handleClick()}}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default NavBarSimple