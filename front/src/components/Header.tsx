import React from 'react'
import { Link } from 'react-router-dom'
import AutoComplete from './AutoComplete'
import '../scss/Global.scss'

const Header = () => {

    return (
        <header>
            <ul className="tablist">
                <li><Link to="/" className="tab selected">WIKI</Link></li>
                <li><AutoComplete /></li>
                <li>
                    <i className="fas fa-cog fa-lg settings"></i>
                    <div className="settings-modal">
                        <ul>
                            <li><Link to="/Create"><i className="fas fa-pen fa-lg settings"></i></Link></li>
                            <li><i className="fas fa-file-upload fa-lg settings"></i></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </header>
    )
}

export default Header