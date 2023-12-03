import { useContext, useEffect, useState } from 'react'
import { MAIN_PAGE, PROFILE_PAGE } from '../../constants/pagesСonst'
import './header.css'
import { UserContext } from '../../App'
import { Link, useNavigate } from 'react-router-dom'

export const Header = ({ namePage }) => {
  const {isUser, setIsUser} = useContext(UserContext)

  const push = useNavigate();
  const [yourName, setYourName] = useState('');
  // const [ isUser, setIsUser ] = useState('');
  const openMenuProfile = () => {
    if (isShowMenu === true) {
      setIsShowMenu(false)
    } else {
      setIsShowMenu(true)
    }
  }
  function logout() {
    localStorage.clear();
    window.location.href = '/';
    setIsUser(false)
  }
  const [isShowMenu, setIsShowMenu] = useState(false);
  useEffect(() => {
    let name = localStorage.getItem('userName');
    if (name) {
      setIsUser(true);
    }
    setInterval(() => {
      setYourName(localStorage.getItem('userName'));
    }, 100);
  }, [])

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Link to="/">
            {namePage === MAIN_PAGE ? (
              <img className="header__logo" src="/img/logo.svg" alt="" />
            ) : (
              <img className="header__logo" src="/img/logo-black.svg" alt="" />
            )}
          </Link>
          {isUser ? (
            <div onClick={openMenuProfile} className="header-profileInfo">
              <img
                className="header-photo"
                src="/img/photoProfile.svg"
                alt=""
              />
              {namePage === MAIN_PAGE ? (
              <p className="header-p header-p__white">{yourName}</p>
            ) : (
              <p className="header-p">{yourName}</p>
            )}
            {namePage === MAIN_PAGE ? (
              <svg width="17px" height="20px" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" color="white"><path d="M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308" stroke="currentColor" strokeWidth="2"></path></svg>
            ) : (
              <img
                className="header-settingsProfile"
                src="/img/settingsProfile.svg"
                alt=""
              />
            )}
              
            </div>
          ) : (
            <Link to='/auth'>
            <button className="header-button">Войти</button>
            </Link>
          )}
          {isShowMenu && (
            <div className="header-profile-div__main">
              {namePage === MAIN_PAGE ? (
              <div>
              <Link to="/">
                <div className="header-profile-div header-p__white">На главную</div>
              </Link>
              <Link to="/profile">
                <div className="header-profile-div header-p__white">Профиль</div>
              </Link>
              <div onClick={logout} className="header-profile-div header-p__white">Выйти</div>
              </div>
            ) : (
              <div>
              <Link to="/">
                <div className="header-profile-div">На главную</div>
              </Link>
              <Link to="/profile">
                <div className="header-profile-div">Профиль</div>
              </Link>
              <div onClick={logout} className="header-profile-div">Выйти</div>
              </div>
            )}
            </div>
          )}
        </div>
      </header>
    </>
  )
}
