import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';
import { NotebookIcon, CardIcon, ArrowDownIcon, BellIcon } from '../../icons';

export const NavbarDropdownNotifications = () => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef();
  const notifications = [
    {
      id: 1,
      description: 'Notificación 1',
      icon: <NotebookIcon/>
    },
    {
      id: 2,
      description: 'Notificación 2',
      icon: <NotebookIcon/>
    },
    {
      id: 3,
      description: 'Notificación 3',
      icon: <CardIcon/>
    },
  ];

  const handleClick = () => {
    setIsOpened(!isOpened);
  }

  useClickOutside( ref, () => setIsOpened(false) );
  
  return (
    <div ref={ ref } className="relative inline-flex">
      <button type="button" className="relative flex items-center gap-3 duration-300 hover:text-pink" onClick={ handleClick }>
        <BellIcon/>
        <span className="absolute -top-1 left-5 w-4 h-4 rounded-full text-sm text-white leading-tight bg-red-500">3</span>
        <ArrowDownIcon/>
      </button>
      <ul ref={ ref } className={`${isOpened ? 'max-h-40' : 'max-h-0'} absolute top-10 right-0 w-max px-3 bg-white rounded-lg shadow-lg z-10 transition-all duration-500 overflow-hidden ease-in-out`}>
        {
          notifications.map( notification => (
            <li key={notification.id} className="my-1 py-1 px-3 text-black-500 border-b duration-300 cursor-pointer hover:bg-lightpurple hover:text-pink">
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
