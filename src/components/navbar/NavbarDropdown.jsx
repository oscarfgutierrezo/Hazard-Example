import { useRef, useState } from 'react';
import { notifications } from '../../data';
import { useClickOutside } from '../../hooks';
import { ArrowDownIcon, BellIcon } from '../../icons';

export const NavbarDropdown = () => {
  const [isOpened, setIsOpened] = useState(false);
  const buttonRef = useRef();

  // Abrir y cerrar el dropdown
  const handleClick = () => {
    setIsOpened(!isOpened);
  }

  // Cerrar el dropdown al hacer click por fuera de buttonRef
  useClickOutside( buttonRef, () => setIsOpened(false) );
  
  return (
    <div className="relative inline-flex">
      <button ref={ buttonRef } type="button" className="relative flex items-center gap-3 duration-300 hover:text-pink" onClick={ handleClick }>
        <BellIcon/>
        <span className="absolute left-5 bottom-4 w-4 h-4 text-sm text-white leading-tight bg-red-500 rounded-full">3</span>
        <ArrowDownIcon/>
      </button>
      <ul className={`${isOpened ? 'max-h-40' : 'max-h-0'} absolute top-10 right-0 w-max px-3 overflow-hidden bg-white rounded-lg shadow-lg z-10 transition-all ease-in-out duration-500`}>
        {
          notifications.map( notification => (
            <li key={notification.id} className="my-1 py-1 px-3 text-black-500 border-b duration-300 cursor-pointer hover:text-pink hover:bg-lightpurple" onClick={ () => setIsOpened(false) }>
              <a href='#' className="flex items-center gap-3" onClick={ handleClick }>
                {notification.icon}{notification.description}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
