import type {FC} from "react";
import {useSelector} from "react-redux";
import type { RootState} from "../store";

export const ProfilePage: FC = () => {
    const { isAuthenticated, email } = useSelector((state: RootState) => state.user)
    return (
        <div>
            <h1>Личный кабинет</h1>
            {isAuthenticated ? (
                <div>
                    <p>Статус: Авторизован успешно</p>
                    <p>Email пользователя: {email}</p>
                </div>
            ) : (
                <p>Вы не авторизованы! Пожалуйста войдите в систему!</p>
            )}
        </div>
    )
}