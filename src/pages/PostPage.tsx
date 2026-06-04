import {type FC} from 'react'
import {useGetArticlesQuery} from "../store/services/spaceNewsApi";

export const PostPage: FC = () => {
    const { data, isLoading, error } = useGetArticlesQuery()

    if(isLoading){
        return <div>Загрузка...</div>
    }
    if(error){
        return <div>Error</div>
    }
    return (
        <div>
            <h1>Космические новости</h1>
            {data?.results.map((article) => (<div key={article.id}>
                <img src={article.image_url} style={{ width:'200px'}} alt={article.title}/>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
            </div>))}
        </div>
    )
}