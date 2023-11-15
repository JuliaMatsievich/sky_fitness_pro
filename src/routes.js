import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/main/MainPage'
import { CursPage } from './pages/cursPage/cursPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/curs" element={<CursPage />}></Route>
    </Routes>
  )
}
