import { useState } from "react";
import { ArrowDownIcon, BellIcon, HamburgerIcon } from "../../icons";
import { NavbarMenuCollapsible, NavbarDropdownNotifications } from "../navbar";

export const Navbar = () => {
  
  const [isOpenedMenu, setIsOpenedMenu] = useState(false)
  const [isOpenedNotifications, setIsOpenedNotifications] = useState(false)

  const handleToggleMenu = () => {
    setIsOpenedMenu(!isOpenedMenu);
  }
  const handleToggleNotifications = () => {
    setIsOpenedNotifications(!isOpenedNotifications);
  }
  
  return (
    <nav className="relative w-full h-min py-3 grid grid-cols-2 items-center gap-2 border-b sm:grid-cols-6 md:px-10">
      <div className="w-10 col-span-1 order-0 md:hidden">
        <img className="" src="./src/assets/logo.png" alt="Logo" />
      </div>
      <div className="col-span-1 justify-self-end order-1 sm:order-2">
        <div className="relative inline-flex">
          <button type="button" className="relative flex items-center gap-3 duration-300 hover:text-pink" onClick={ handleToggleNotifications }>
            <BellIcon/>
            <span className="absolute -top-1 left-5 w-4 h-4 rounded-full text-sm text-white leading-tight bg-red-500">3</span>
            <ArrowDownIcon/>
          </button>
          <NavbarDropdownNotifications isOpened={ isOpenedNotifications } />
        </div>
        <button type="button" className="ml-4 p-0.5 border border-transparent rounded-md duration-300 hover:text-pink hover:border-lightpurple md:hidden" onClick={ handleToggleMenu }>
          <HamburgerIcon/>
        </button>
      </div>
      <NavbarMenuCollapsible isOpened={ isOpenedMenu } />
      <div className="col-span-2 flex flex-col text-center order-4 sm:col-span-4 sm:order-1 sm:text-left md:col-span-5 md:flex-row md:items-baseline">
        <h2 className="text-2xl font-bold text-black-900">Hola,<span className="font-normal"> Andrea Sotil</span></h2>
        <p className="text-black-300 font-medium md:pl-6">Tienes <span className="text-blue">3 alertas</span> esperando por ti</p>
      </div>
    </nav>
  )
}
