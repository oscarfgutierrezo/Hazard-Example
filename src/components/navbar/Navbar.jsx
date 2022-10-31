import { useRef, useState } from 'react';
import { NavbarCollapsibleMenu, NavbarDropdown } from '../navbar';
import { useClickOutside } from '../../hooks';
import { HamburgerIcon } from '../../icons';

export const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const buttonRef = useRef();

  // Abrir y cerrar el menú
  const handleClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  // Cerrar el menú al hacer click por fuera de buttonRef
  useClickOutside( buttonRef, () => setIsMenuOpened(false) );
  
  return (
    <nav className="relative w-full h-min py-3 grid grid-cols-2 items-center gap-2 border-b sm:grid-cols-6 md:px-10">
      <div className="col-span-1 w-10 order-0 md:hidden">
        <img src="https://i.ibb.co/dpzvnbS/logo.png" alt="Logo" />
      </div>
      <div className="col-span-1 justify-self-end order-1 sm:col-span-2 sm:order-2 md:col-span-1">
        <NavbarDropdown/>
        <button ref={ buttonRef } type="button" className="ml-4 p-1 rounded-md duration-300 hover:bg-black-300/20 md:hidden" onClick={ handleClick }>
          <HamburgerIcon/>
        </button>
      </div>
      <div className='col-span-2 order-2 sm:col-span-6 sm:order-3 md:hidden'>
        <NavbarCollapsibleMenu isOpened={ isMenuOpened } />
      </div>
      <div className="col-span-2 order-4 sm:col-span-3 sm:order-1 md:col-span-5 ">
        <div className='flex flex-col text-center sm:text-left md:flex-row md:items-baseline'>
          <h2 className="text-2xl font-bold text-black-900">Hola,<span className="font-normal"> Andrea Sotil</span></h2>
          <p className="font-medium text-black-300 md:pl-6">Tienes <span className="text-blue">3 alertas</span> esperando por ti</p>
        </div>
      </div>
    </nav>
  )
}
