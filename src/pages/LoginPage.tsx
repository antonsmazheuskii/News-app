import { type FC, useState } from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginSuccess} from "../store/modules/userSlice";

export const LoginPage: FC = () => {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(email.length === 0 || password.length === 0){
            alert('Заполните все поля!')
            return
        }
        dispatch(loginSuccess({ email, token: 'fake-token-123'}));
        navigate('/profile')
    }

    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Введите Email' value={email} onChange={
                    (e) => setEmail(e.target.value)}/>
                <input type='password' placeholder='Введите пароль' value={password} onChange={
                    (e) => setPassword(e.target.value)}/>
                <button type='submit'>Войти</button>
            </form>
        </div>
    )
}