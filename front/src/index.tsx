import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter basename="/wiki">
    <Header />
  </BrowserRouter>,
  document.getElementById('root')
)

