import { useState } from "react"
import { BellIcon, NotebookIcon } from "../icons"
import { HamburgerIcon } from "../icons/HamburgerIcon"
import { NavbarMenuCollapsible, NavbarNotifications } from "./"

export const Navbar = () => {
  
  const [isOpenedMenu, setIsOpenedMenu] = useState(false)
  const [isOpenedNotifications, setIsOpenedNotifications] = useState(false)

  const handleToggleMenu = () => {
    setIsOpenedMenu(!isOpenedMenu)
    console.log(isOpenedMenu);
  }
  const handleToggleNotifications = () => {
    setIsOpenedNotifications(!isOpenedNotifications)
    console.log(isOpenedNotifications);
  }
  
  return (
    <nav className="relative pb-3 flex flex-col gap-5 border-b">
      <div className="flex justify-between items-center">
        <img className="w-10" src="./src/assets/logo.png" alt="Logo" />
        <div>
          <button className="relative" onClick={ handleToggleNotifications }>
            <BellIcon/>
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-sm text-white leading-tight bg-red-500">3</span>
            <NavbarNotifications isOpened={ isOpenedNotifications } />
          </button>
          <button className="ml-3" onClick={ handleToggleMenu }>
            <HamburgerIcon/>
          </button>
        </div>
      </div>
      <NavbarMenuCollapsible isOpened={ isOpenedMenu } />
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black-900">Hola,<span className="font-normal"> Andrea Sotil</span></h2>
        <p className="text-black-300 font-medium">Tienes <span className="text-blue">3 alertas</span> esperando por ti</p>
      </div>
    </nav>
  )
}
