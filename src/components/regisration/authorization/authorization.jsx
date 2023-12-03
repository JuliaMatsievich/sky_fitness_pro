import React, { useContext, useEffect, useState } from 'react'
import '../authRegForm.css'
import { Link, useNavigate } from 'react-router-dom'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../../../App';


export function Authorization() {
  const push = useNavigate();
  const [inputLogin, setLogin] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [error, setError] = useState('')
  const {isUser, setIsUser} = useContext(UserContext)

  function loginUser() {
    let email = inputLogin;
    let password = inputPassword;
    if (!email && !password) {
      setError('Поля не должны быть пустыми')
      return
    }
    if (!email && password) {
      setError('Поле Логин(email) не должно быть пустым')
      return
    }
    if (email && !password) {
      setError('Поле Пароль не должно быть пустым')
      return
    }
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('userName', user.email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('uid', user.auth.currentUser.uid)
    setIsUser(true)
    console.log(user);
    push('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/invalid-email') {
      setError('Неправильно введен email или такой пользователь не найден')
    }
    if (errorCode === 'auth/wrong-password') {
      setError('Неправильно введен пароль')
    }
    console.log(errorCode + ' ' + errorMessage);
  });
}

useEffect(() => {
  setError('')  
},[inputLogin, inputPassword])

  return (
    <div className="main-authorization">
      <Link to='/.'>
        <img className="main-authorization__logo" src="./img/logo.svg" alt="" />
      </Link>
      <div className="authorization-form">
        <div className="authorization-form__forImg">
          <img
            className="authorization-form__img"
            src="./img/logo-black.svg"
            alt=""
          />
        </div>
        <div className="authorization-form__inputs">
          <input
            className="authorization-form__input"
            placeholder="Логин(email)"
            type="text"
            value={inputLogin} 
            onChange={(event) => setLogin(event.target.value)}
            minLength={4}
            maxLength={36}
          />
          <input
            className="authorization-form__input"
            placeholder="Пароль"
            type="password"
            value={inputPassword} 
            onChange={(event) => setPassword(event.target.value)}
            minLength={8}
            maxLength={16}
          />
        </div>
        {error ? <p className='error'>{error}</p> : ''}
        <div className="authorization-form__buttons">
          <button onClick={loginUser} className="authorization-form__button">Войти</button>
          <Link to='/reg'>
          <button className="authorization-form__button authorization-form__button__reg">
            Зарегистрироваться
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
