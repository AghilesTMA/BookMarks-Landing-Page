import { createContext, useState } from "react"

export const OpenMenu = createContext();

const MenuProvider = ({children}) => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <OpenMenu.Provider value={{isOpen,setIsOpen}}>
      {children}
    </OpenMenu.Provider>
  )
}

export default MenuProvider