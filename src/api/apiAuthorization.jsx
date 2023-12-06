import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const getLoginUser = (email, password) => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem('userName', user.email)
      localStorage.setItem('userPassword', password)
      localStorage.setItem('uid', user.auth.currentUser.uid)
		// window.location.href ='/'
		return user
      // 
    })
    .catch((error) => {
      // if (error.code === 'auth/invalid-email') {
      //   setError('Неправильно введен email или такой пользователь не найден')
      // }
      // if (error.code === 'auth/wrong-password') {
      //   setError('Неправильно введен пароль')
      // }
      // console.log(error.code + ' ' + error.message)
		return {error}
		// return {errorCode: error.code, errorMessage: error.message}
    })
}
