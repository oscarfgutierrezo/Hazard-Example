import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';
import { HamburgerIcon } from '../../icons';
import { NavbarMenuCollapsible, NavbarDropdown } from '../navbar';

export const Navbar = () => {
  const ref = useRef();
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsOpenedMenu(!isOpenedMenu);
  };

  useClickOutside( ref, () => setIsOpenedMenu(false) );
  
  return (
    <nav className="relative w-full h-min py-3 grid grid-cols-2 items-center gap-2 border-b sm:grid-cols-6 md:px-10">
      <div className="w-10 col-span-1 order-0 md:hidden">
        <img className="" src="./src/assets/logo.png" alt="Logo" />
      </div>
      <div className="col-span-1 justify-self-end order-1 sm:col-span-2 sm:order-2 md:col-span-1">
        <NavbarDropdown/>
        <button ref={ ref } type="button" className="ml-4 p-1 rounded-md duration-300 hover:bg-black-300/20 md:hidden" onClick={ handleToggleMenu }>
          <HamburgerIcon/>
        </button>
      </div>
      <NavbarMenuCollapsible isOpened={ isOpenedMenu } />
      <div className="col-span-2 flex flex-col text-center order-4 sm:col-span-3 sm:order-1 sm:text-left md:col-span-5 md:flex-row md:items-baseline">
        <h2 className="text-2xl font-bold text-black-900">Hola,<span className="font-normal"> Andrea Sotil</span></h2>
        <p className="text-black-300 font-medium md:pl-6">Tienes <span className="text-blue">3 alertas</span> esperando por ti</p>
      </div>
    </nav>
  )
}
