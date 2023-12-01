import './App.css'
import { AppRoutes } from './routes'
import { createContext, useState } from 'react'
export const UserContext = createContext(null);

function App() {
  const [isUser, setIsUser] = useState(true);
  const [isProgressComplete, setIsProgressComplete] = useState(false)

  // create a state with an id
  const [workoutId, setWorkoutId] = useState()
  //

  return (
    <>
      <UserContext.Provider
        value={{
          isUser,
          setIsUser,
          isProgressComplete,
          setIsProgressComplete,
          workoutId,
          setWorkoutId
        }}
      >
        <AppRoutes />
      </UserContext.Provider>
    </>
  )
}

export default App
