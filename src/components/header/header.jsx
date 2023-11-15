import { useContext } from "react"
import { MAIN_PAGE, PROFILE_PAGE } from "../../constants/pagesСonst"
import "./header.css"
import { UserContext } from "../../App"

export const Header = ({namePage}) => {

  const {isUser, setIsUser} = useContext(UserContext)

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          {namePage === MAIN_PAGE 
          ? <img className="header__logo" src="./img/logo.svg" alt=""/>
          : <img className="header__logo" src="./img/logo-black.svg" alt=""/>
          }
          {isUser ?
          <div className="header-profileInfo">
          <img className="header-photo" src="./img/photoProfile.svg" alt="" />
          <p className="header-p">Сергей</p>
          <img
            className="header-settingsProfile"
            src="./img/settingsProfile.svg"
            alt=""
          />
        </div> : 
        <button className="header-button">Войти</button>}
        </div>
      </header>
    </>
  )
}
