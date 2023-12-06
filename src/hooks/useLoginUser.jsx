import { useContext } from "react"
import { getLoginUser } from "../api/apiAuthorization"
import { UserContext } from "../App"

export const useLoginUser = (email, password) => {
	const {isUser, setIsUser} = useContext(UserContext)

	const handleLoginUser = () => {
		// if (!email && !password) {
		//   setError('Поля не должны быть пустыми')
		//   return
		// }
		// if (!email && password) {
		//   setError('Поле Логин(email) не должно быть пустым')
		//   return
		// }
		// if (email && !password) {
		//   setError('Поле Пароль не должно быть пустым')
		//   return
		// }
	//  getLoginUser(email, password)
	 console.log(getLoginUser(email, password));
	 console.log('jjj');
	//  setIsUser(true)
  }
 return {isUser,handleLoginUser}
}