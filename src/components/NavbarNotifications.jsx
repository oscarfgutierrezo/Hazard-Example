import { NotebookIcon, CardIcon } from "../icons"

export const NavbarNotifications = ( {isOpened} ) => {
  
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
  ]
  
  return (
    <ul className={`${isOpened ? 'max-h-40' : 'max-h-0'} absolute top-10 right-0 w-max px-3 bg-white rounded-lg shadow-lg z-10 transition-all duration-500 overflow-hidden ease-in-out`}>
      {
        notifications.map( notification => (
          <li key={notification.id} className="my-1 py-1 px-3 text-black-500 border-b duration-300 cursor-pointer hover:bg-lightpurple hover:text-pink">
            <button className="flex items-center gap-3">
              {notification.icon}{notification.description}
            </button>
          </li>
        ))
      }
    </ul>
  )
}
