import { useEffect, useState } from "react"
import data from '../news.json'
import NewsItem from "./NewItem"
import '../styles/global.css'
import newsAppStyle from '../styles/NewsApp.module.css'

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

    useEffect(() => {
        fetch("/api/users")
            .then(res => res.json())
            .then(json => {
                console.log(json)
            })
    }, [])
    
    if(loading) return <h1>뉴스 기사를 불러오는 중입니다.</h1>
    //1. articles가 하나도 없는 경우 => 적당이 표시할 뉴스가 없다고 띄우기
    //2. articles 내부의 뉴스를 하나씩 표시
    return <div className={newsAppStyle.news_app}>{
        articles === 0 ? <h1>표시할 뉴스가 없습니다</h1>
        :
        <ul>
            {
                articles.map(a => {
                    return <li className={newsAppStyle.news_app_list}>
                        <NewsItem article={a}/>
                    </li>
                })
            }
        </ul>
    }</div> 
}

export default NewsApp