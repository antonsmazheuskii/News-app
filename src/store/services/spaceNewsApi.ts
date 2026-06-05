import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {IArticle, IArticleResponse} from "../../types/article";

export const spaceNewsApi = createApi({
    reducerPath: "spaceNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.spaceflightnewsapi.net/v4" }),
    endpoints: (builder) => ({
        getArticles: builder.query<IArticleResponse, void>({
            query: () => '/articles/',
        }),
        getArticlesById: builder.query<IArticle, string>({
            query:(id) => `articles/${id}/`,
        })
    })
})
export const {useGetArticlesQuery, useGetArticlesByIdQuery} = spaceNewsApi;