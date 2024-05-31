import { useEffect, useState } from "react"
import data from '../news.json'

function NewsApp(props){
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setArticles(data.articles)
            console.log(data.articles)
            setLoading(false)
        }, 2000)
    }, [])

    if(loading) return <h1>뉴스 기사를 불러오는 중입니다.</h1>
    //1. articles가 하나도 없는 경우 => 적당이 표시할 뉴스가 없다고 띄우기
    //2. articles 내부의 뉴스를 하나씩 표시
    return <div>{
        articles === 0 ? <h1>표시할 뉴스가 없습니다</h1>
        :
        <ul>
            {
                articles.map(item => {
                    return <div>
                        <h2>{item.title}</h2> 
                        <h3>{item.description}</h3>
                        <p>뉴스 기사 : {item.url}</p>
                        <br/>
                    </div>
                })
            }
        </ul>
    }</div> 
}

export default NewsApp