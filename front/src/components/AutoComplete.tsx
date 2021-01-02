import { useEffect, useState } from 'react'

const AutoComplete = () => {
    let [category, setCategory]: any = useState([])
    let [category2, setCategory2]: any = useState()
    let [visible, setVisible]: any = useState(false)

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
    }

    return (
        <div>
            <input type="text" className="autocomplete" placeholder="카테고리 검색" onKeyUp={SearchCateGory} />
            <div className="autocomplete-list">
            {visible ?
                category2.map((v: any, i: number) =>
                    <div className="autocomplete-items" key={i}>
                        <a href="">{v.name}</a> 
                    </div>
                )
            : null} 
            </div>
        </div>
    )
}

export default AutoComplete