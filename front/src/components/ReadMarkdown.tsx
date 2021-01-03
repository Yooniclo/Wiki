import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'

interface MatchParams {
    id: string,
    doc: string
}

const ReadMarkdown = ({match}: RouteComponentProps<MatchParams>) => {
    const [html, setHTML]: any = useState()

    useEffect(() => { 
        const GetMarkdown = async () => {
            const response = await fetch(process.env.REACT_APP_URL + match.url)
            let json = await response.json()
            setHTML(json)
        }
        GetMarkdown()
    }, [match.url])

    return (
        <div className="read">
            <div className="edit">
                <Link to={`/edit/${match.params.doc}`} className="edit-link">편집</Link>        
            </div>
            <div className="markdown-div" dangerouslySetInnerHTML={html}></div>
        </div>
    )
}

export default ReadMarkdown