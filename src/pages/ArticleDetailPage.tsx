import type {FC} from "react";
import {useParams} from "react-router-dom";
import {useGetArticlesByIdQuery} from "../store/services/spaceNewsApi.ts";

export const ArticleDetailPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const {data: article, isLoading, error} = useGetArticlesByIdQuery(id ?? '')

    if(isLoading){
        return <div>Загрузка статьи...</div>
    }
    if (error){
        return <div>Ошибка загрузки статьи...</div>
    }
    return (
        <div>
            <h1>{article?.title}</h1>
            <img src={article?.image_url} alt={article?.title} style={{ width: '400px' }} />
            <p> {article?.summary}</p>
        </div>
    )
}