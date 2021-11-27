import style from './style.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {fetchLogin} from '../../redux/operation'

export function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loginUser =(data)=> dispatch(fetchLogin(data));

  const handleChangeAllInput = (ev) => {      
    if (ev.target.name === "login") {
      setLogin(ev.target.value)
    } else if (ev.target.name === "password") {
        setPassword(ev.target.value)
    }
    };
    
     return (
         <form
             className={style.form}
              onSubmit={(e) => {
                e.preventDefault();
                  loginUser({ email:login, password });
                setLogin("");
                setPassword("");
      }}
         >
            <h3>Login</h3>
            <label               
                className={style.label}>Email           
                <input
                    id="inputName"
                    type="text"
                    name="login"
                    className={style.input}
                    pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
                    title="Введите адекватный почтовый адрес"
                    placeholder="e-mail"
                    required
                    onChange={handleChangeAllInput}
                    value={login}
                />
             </label>
          
             <label className={style.label}>Password
                <input
                    type="password"
                    name="password"
                    className={style.input}
                    pattern="\w{4,16}"
                    title="Пароль может состоять из лат. букв или цифр от 4 до 16 символов"
                    placeholder="Лат. буквы или цифры 4-16 символов"
                    required
                    onChange={handleChangeAllInput}
                    value={password}
                />
            </label>
            <button
                className={style.button}
                type="submit"
                >Send</button>
        </form>
    )
}