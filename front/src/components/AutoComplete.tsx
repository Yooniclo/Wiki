import React from 'react'
import { Link } from 'react-router-dom' 

const AutoComplete = () => {

    return (
        <div>
            <input type="text" className="autocomplete" placeholder="카테고리 검색" />
            <div className="autocomplete-list"></div>
        </div>
    )
}

export default AutoComplete