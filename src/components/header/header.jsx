import { MAIN_PAGE } from "../../constants/pagesСonst"
import "./header.css"

export const Header = ({namePage}) => {

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          {namePage === MAIN_PAGE 
          ? <img className="header__logo" src="./img/logo.svg" alt=""/>
          : <img className="header__logo" src="./img/logo-black.svg" alt=""/>
          }
        </div>
      </header>
    </>
  )
}
