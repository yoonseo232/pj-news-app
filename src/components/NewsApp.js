import { useEffect, useState } from "react"
import data from '../news.json'

function NewsApp(props){
    const [articles, setArticles] = useState([])
    useEffect(() => {
        setTimeout(() => {

        }, 2000)
    }, [])
    return <div>NewsApp</div>
}

export default NewsApp