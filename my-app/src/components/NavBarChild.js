import React from 'react'

function NavBarChild(props) {
    return (
        <div>
            <form>
                <label>Username:</label>
                <input type="text" placeholder="username"></input>
                <label>Passwork:</label>
                <input type="password" placeholder="password"></input>
                <button onClick={props.handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default NavBarChild
