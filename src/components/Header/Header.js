import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Header.scss'

class Header extends Component {
    render () {
        return (
            <header className="Header">
                <ul>
                    <li><Link to="/">Table 1</Link></li>
                    <li><Link to="/table2">Table 2</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header