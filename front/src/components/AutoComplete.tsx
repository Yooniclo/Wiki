import { useEffect, useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'

let focus: number = -1

const AutoComplete = () => {
    let [category, setCategory]: any = useState([])
    let [category2, setCategory2]: any = useState()
    let [visible, setVisible]: any = useState(false)
    let Div = useRef<HTMLDivElement>(null)
    let history = useHistory()

    useEffect(() => { 
        const GetCateGory = async () => {
            const response = await fetch(process.env.REACT_APP_URL + '/wiki/json/category.json')
            let json = await response.json()
            setCategory(json)
        }
        GetCateGory()
    }, [])

    const SearchCateGory = (e: any) => {
        if(e.target.value === '') {
            setVisible(false)
            return false
        }
        let findValue = category.filter((v: any) => v.name.substr(0, e.target.value.length).toUpperCase() === e.target.value.toUpperCase())
        setCategory2(findValue)
        setVisible(true)

        let list: any = Div.current
        let child: any = Div.current?.childNodes

        //40: down 38: up 13: enter
        switch(e.keyCode) {
            case 40: 
                if(list.hasChildNodes()) {
                    focus = focus + 1
                    if(child.length <= focus) focus = 0
                    if(focus < 0) focus = child.length - 1
                    for(let i = 0; i < child.length; i++) child[i].classList.remove('autocomplete-active')
                    child[focus].classList.add('autocomplete-active')
                }
                break
            case 38:
                if(list.hasChildNodes()) { 
                    focus = focus - 1     
                    for(let i = 0; i < child.length; i++) child[i].classList.remove('autocomplete-active')
                    if(child.length <= focus) focus = 0
                    if(focus < 0) focus = child.length - 1
                    child[focus].classList.add('autocomplete-active')
                }
                break
            case 13: 
                const active = document.querySelector('.autocomplete-active')
                let value: any = active?.childNodes[0].textContent
                history.push('/read/' + value)
                setVisible(false)
                break
        }
    }
    
    return (
        <div>
            <input type="text" className="autocomplete" placeholder="카테고리 검색" onKeyUp={SearchCateGory}/>
            <div className="autocomplete-list" ref={Div}>
            {visible ?
                category2.map((v: any, i: number) =>
                    <div className="autocomplete-items" key={i}>
                        <Link to={`/read/${v.name}`} onClick={()=>setVisible(false)}>{v.name}</Link> 
                    </div>
                )
            : null} 
            </div>
        </div>
    )
}

export default AutoComplete