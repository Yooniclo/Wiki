import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components' 
import AutoComplete from './AutoComplete'

const HeaderStyled = styled.header`
    width: 100vw;
    a { color: inherit; }
    ul {
        display: flex;
        justify-content: space-between;
        flex: 0 0 60px;
        border-bottom: 1px solid rgba(0,0,0,0.12);
        background: #fff;
    }
    li {
        display: flex;
        align-items: center;
        padding: 8px 14px;
    }
    .settings{
        color: #B2C0CC;
        cursor: pointer;
        &:hover{
          color: #000;
        }
    }
    .settings-modal{
        display: none;
        border: 1px solid #E9ECF3;
        border-top: none;
        position: absolute;
        right: 0px;
        top: 55px;
        width: 50px;
        background-color: #fff;
        li{
          height: 55px;
          padding: 0;
          padding-left: 15px;
        }
        li:last-child{
          border-top: 1px solid #E9ECF3;
          padding-left: 18px;
        }
    }
    .tab{
        position: relative;
        display: block;
        line-height: 30px;
        font-weight: bold;
    }
`

const Header = () => {

    return (
        <HeaderStyled>
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
        </HeaderStyled>
    )
}

export default Header