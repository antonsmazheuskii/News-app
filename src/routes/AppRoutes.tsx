import type {FC} from "react";
import {PostPage} from "../pages/PostPage.tsx";
import {Route, Routes} from "react-router-dom";
import {ProfilePage} from "../pages/ProfilePage.tsx";
import {ArticleDetailPage} from "../pages/ArticleDetailPage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";

export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/posts' element={<PostPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/posts/:id' element={<ArticleDetailPage />} />
            <Route path='*' element={<div><h2>Страница не найдена (404)</h2></div>}/>
        </Routes>
    )
}