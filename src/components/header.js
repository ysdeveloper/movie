import React from 'react'
import { NavLink } from 'react-router-dom'

// Components
import {HamburgerIcon} from './icon'
import {PopUpSearchbar} from './searchbar'

export class Header1 extends React.Component {
    render() {
        return (
            <header className="d-flex align-items-center justify-content-between px-4 py-2 position-absolute fixed-top w-100">
                <div className="logo d-flex align-items-center">
                    <NavLink to="/">
                        <img src={require('../img/mix_text_logo_white.png')} height="auto" width="100" alt="logo" />
                    </NavLink>
                </div>
                <div className="links d-flex">
                    <PopUpSearchbar />
                    <HamburgerIcon className="hamburger-style-1 ml-4" bgColor="#f7f7f7" />
                </div>
            </header>
        )
    }
}