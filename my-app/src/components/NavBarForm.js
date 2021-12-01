import React, { Component } from 'react'
import NavBarChild from './NavBarChild'
import css from './css/NavBarForm.module.css'

export class NavBarForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }

    handleClick = () => {
        this.setState({
            isLoggedIn: this.state.isLoggedIn === true ? false : true
        })
    }
    
    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {this.state.isLoggedIn ? (
                    <NavBarChild handleClick={this.handleClick} />
                ) : (
                    <button onClick={this.handleClick}>Login</button>
                )}
            </div>
        )
    }
}

export default NavBarForm
