import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/main/MainPage'
import { CursPage } from './pages/cursPage/cursPage'
import ProfilePage from './pages/profile/profilePage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/curs" element={<CursPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  )
}
