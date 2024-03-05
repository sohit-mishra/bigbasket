import { createContext, useState } from "react"

export const ThemeContent = createContext();
export default function AuthContentProvider({children}) {
  const [IsAuth ,setIsAuth] = useState(false);

  const myThemeContext = {
    IsAuth,
    setIsAuth
  }
  return (
    <ThemeContent.Provider value={myThemeContext}>
      {children}
    </ThemeContent.Provider>
  )
}
