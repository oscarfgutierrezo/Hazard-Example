import { HomeIcon, NotebookIcon, CardIcon, BagMoneyIcon } from "../icons";
import { itemsNavigation } from "./itemsNavigation";

export const NavbarMenuCollapsible = ({ isOpened }) => {
  return (
    <ul className={`${isOpened ? 'max-h-40' : 'max-h-0'} col-span-2 order-2 transition-all duration-500 overflow-hidden ease-in-out sm:col-span-6 sm:order-3 md:hidden`}>
      {
        itemsNavigation.map( item => (
          <li key={item.id} className="py-1 pl-3 text-black-500 border-b duration-300 cursor-pointer hover:bg-lightpurple hover:text-pink">
            <button className="flex items-center gap-3">
              {item.icon}{item.name}
            </button>
          </li>
        ))
      }
    </ul>
  )
}
