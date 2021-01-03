import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import ReadMarkDown from './components/ReadMarkdown'
import EditMarkDown from './components/EditMarkdown'
import { BrowserRouter, Route, Redirect } from "react-router-dom"
import './scss/Global.scss'

ReactDOM.render(
  <BrowserRouter basename="/wiki">
    <Header />
    <Route exact path="/"><Redirect to="read/readme"/></Route>
    <Route path='/read/:doc' component={ReadMarkDown} />
    <Route path='/edit/:doc' component={EditMarkDown} />
  </BrowserRouter>,
  document.getElementById('root')
)

