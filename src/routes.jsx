import { Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/profile/ProfilePage'
import MainPage from './pages/main/MainPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
    </Routes>
  )
}