import { HomeIcon, NotebookIcon, CardIcon, BagMoneyIcon } from "../icons";

export const NavbarMenuCollapsible = ({ isOpened }) => {
  const menuOptions = [
    {
      name: 'Inicio',
      icon: <HomeIcon/>
    },
    {
      name: 'Pagos',
      icon: <NotebookIcon/>
    },
    {
      name: 'Nómina',
      icon: <CardIcon/>
    },
    {
      name: 'Saldos',
      icon: <BagMoneyIcon/>
    },
  ]
  
  return (
    <ul className={`${isOpened ? 'max-h-40' : 'max-h-0'} transition-all duration-500 overflow-hidden ease-in-out`}>
      {
        menuOptions.map( option => (
          <li className="py-1 pl-3 text-black-500 border-b duration-300 cursor-pointer hover:bg-lightpurple hover:text-pink">
            <button className="flex items-center gap-3">
              {option.icon}{option.name}
            </button>
          </li>
        ))
      }
    </ul>
  )
}
