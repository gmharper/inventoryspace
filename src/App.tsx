// IMPORTS
import { createContext, useCallback, useLayoutEffect, useReducer, useState, type Dispatch, type Reducer, type SetStateAction } from 'react'
import "./App.css"
import "./index.css"

// COMPONENTS
import { TopNavbar, BotNavbar, LeftPanel } from './components'
import { Main } from './components/pages/index'

// TYPE DECLARATION
import { type user } from './types/types'

interface AppContext {
  isLoggedIn:boolean, setIsLoggedIn:Dispatch<SetStateAction<boolean>>,
  loggedInUsername:string, setLoggedInUsername:Dispatch<SetStateAction<string>>,
  loggedInUser:user, setLoggedInUser:Dispatch<Reducer<user, any>>,
  getWindowSize:Function
}

const defaultUser = {
  username: 'default_user', name: 'Default_User', password:'', email:'', theme:'',
  inventories: []
}

export const AppContext = createContext<AppContext>({} as AppContext)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [loggedInUsername, setLoggedInUsername] = useState('default_user')

  const userReducer = (state:any, action:any) => {
    const userCopy = {...state}

    for (const key in action) {
      if (userCopy.hasOwnProperty(key)) userCopy[key] = action[key]
    }

    return userCopy
  }

  const [loggedInUser, setLoggedInUser] = useReducer(userReducer, defaultUser)

  const getWindowSize = useCallback(() => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }

      window.addEventListener('resize', updateSize);
      updateSize();

      return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
  }, [] )

  return (
    <AppContext.Provider value={{ 
      isLoggedIn, setIsLoggedIn, 
      loggedInUsername, setLoggedInUsername,
      loggedInUser, setLoggedInUser, 
      getWindowSize 
    }}>
      <TopNavbar />
      <div className='flex flex-row w-screen'>
        <LeftPanel />
        <Main />
      </div>
      <BotNavbar />
    </AppContext.Provider>
  )
}

export default App
