import React from 'react'
// import { TOKEN_POST } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {

  return (
    <UserContext.Provider value={{usuario: 'Alex'}}>
      {children}
    </UserContext.Provider>
  )
}
