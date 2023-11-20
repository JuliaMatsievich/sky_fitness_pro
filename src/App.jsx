import './App.css'
import { AppRoutes } from './routes'
import { createContext, useState } from 'react'
import { firestore } from './firebase'
export const UserContext = createContext(null)

function App() {
  const [isUser, setIsUser] = useState(true)

  console.log(firestore.collection('courses').get())

  return (
    <>
      <UserContext.Provider value={{ isUser, setIsUser }}>
        <AppRoutes />
      </UserContext.Provider>
    </>
  )
}

export default App
