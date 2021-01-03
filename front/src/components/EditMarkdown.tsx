import { useEffect, useState, useRef } from 'react'
import { RouteComponentProps } from 'react-router'

interface MatchParams {
    id: string
}

const EditMarkDown = ({match}: RouteComponentProps<MatchParams>) => {
    const [html, setHTML]: any = useState([])
    const inputEl = useRef<HTMLInputElement>(null)
    const textareaEl = useRef<HTMLTextAreaElement>(null)

    useEffect(() => { 
        const GetMarkdown = async () => {
            const response = await fetch(process.env.REACT_APP_URL + match.url)
            let json = await response.json()
            setHTML(json)
        }
        GetMarkdown()
    }, [match.url])

    useEffect(() => { 
        if(html.category === undefined) html.category = null
        if(textareaEl.current) textareaEl.current.value = html.markdown
        if(inputEl.current) inputEl.current.value = html.category
        
        if(html.category !== null) {
            if(inputEl.current) {
                inputEl.current.readOnly = true
                inputEl.current.style.color = '#B2C0CC'
            }
        } 
    }, [html.category, html.markdown, html])

    return (
        <div className="newDoc-container">
            <div className="newDoc-wrapper">
                <textarea placeholder="Markdown 문법을 적어주세요" ref={textareaEl}></textarea>
            </div>
            <div className="doc-category">
                <input type="text" placeholder="카테고리 입력" ref={inputEl} />
                <button>제출</button>
            </div>
        </div>
    )
}

export default EditMarkDown