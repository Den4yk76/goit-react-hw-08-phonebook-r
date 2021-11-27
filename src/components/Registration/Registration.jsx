import style from './style.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSubmitUser } from '../../redux/operation';

export function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

  const handleChangeAllInput = (ev) => {

    switch (ev.target.name) {
        case "name":
          setName(ev.target.value)  
            break;
        case "email":
            setEmail(ev.target.value)
            break;
        case "password":
            setPassword(ev.target.value)
            break;
    
        default: alert("WTF ???")
            break;
    }
};



  const submitUser = () => dispatch(fetchSubmitUser({name,email,password}));  


    return (
        <form
            className={style.form}
            onSubmit={(e) => {
                e.preventDefault();
                submitUser({ name, email, password });
                setName("");
                setEmail("");
                setPassword("");
            }}
        >
            <h3>Registration</h3>
            <label               
                className={style.label}>Name           
                <input
                    id="inputName"
                    type="text"
                    name="name"
                    className={style.input}
                    pattern="\w{4,16}"
                    title="Логин может состоять из лат. букв или цифр от 4 до 16 символов"
                    placeholder="Лат. буквы или цифры 4-16 символов"
                    required
                    onChange={handleChangeAllInput}
                    value={name}
                />
             </label>
             <label className={style.label}>Email
                <input
                    type="text"
                    name="email"
                    className={style.input}
                    pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
                    title="Введите адекватный почтовый адрес"
                    placeholder="e-mail"
                    required
                    onChange={handleChangeAllInput}
                    value={email}
                />
            </label >
             <label className={style.label}>Password
                <input
                    type="password"
                    name="password"
                    className={style.input}
                    pattern="\w{7,16}"
                    title="Пароль может состоять из лат. букв или цифр от 7 до 16 символов"
                    placeholder="Лат. буквы или цифры 7-16 символов"
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