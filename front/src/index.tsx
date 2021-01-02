import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import { BrowserRouter } from "react-router-dom"
import './scss/Global.scss'

ReactDOM.render(
  <BrowserRouter basename="/wiki">
    <Header />
  </BrowserRouter>,
  document.getElementById('root')
)

