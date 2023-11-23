import './App.css'
import { AppRoutes } from './routes'
import { createContext, useState } from 'react'
// import { useGetCoursesQuery } from './services/coursesApi'

export const UserContext = createContext(null)

function App() {
  const [isUser, setIsUser] = useState(true)
  // const {data: courses} = useGetCoursesQuery()
  // console.log('coursesApp', courses);

  return (
    <>
      <UserContext.Provider value={{ isUser, setIsUser }}>
        <AppRoutes />
      </UserContext.Provider>
    </>
  )
}

export default App
