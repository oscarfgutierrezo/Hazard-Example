import { itemsNavigation } from '../../data';

export const NavbarCollapsibleMenu = ({ isOpened }) => {

  return (
    <ul className={`${isOpened ? 'max-h-40' : 'max-h-0'} overflow-hidden transition-all ease-in-out duration-500`}>
      {
        itemsNavigation.map( item => (
          <li key={item.id} className="py-1 pl-3 text-black-500 border-b duration-300 cursor-pointer hover:text-pink hover:bg-lightpurple">
            <a href="#" className="flex items-center gap-3">
              {item.icon}{item.name}
            </a>
          </li>
        ))
      }
    </ul>
  )
}
