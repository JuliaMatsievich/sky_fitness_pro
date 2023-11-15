import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/main/MainPage'
import { CursPage } from './pages/cursPage/cursPage'
import { ProfilePage } from './pages/profile/ProfilePage'
import { ProtectedRoute } from './components/protedcted-route'
import { useContext } from 'react'
import { UserContext } from './App'

export const AppRoutes = () => {
  const {isUser} = useContext(UserContext)

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/curs" element={<CursPage />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(isUser)} />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}