import './App.css'
import { AppRoutes } from './routes'
import { createContext, useState } from 'react'
export const UserContext = createContext(null);
// commit for master(CI/CD)

function App() {
  const [isUser, setIsUser] = useState(true);
  
  return (
    <>
      <UserContext.Provider value={{ isUser, setIsUser }}>
        <AppRoutes />
      </UserContext.Provider>
    </>
  )
}

export default App
