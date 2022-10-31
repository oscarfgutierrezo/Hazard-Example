import { itemsNavigation } from '../../data';

export const Sidebar = () => {
  return (
    <div className="py-3 pr-5 hidden border-r md:flex md:flex-col md:items-center md:gap-10">
      <div className="w-10">
        <img src="https://i.ibb.co/dpzvnbS/logo.png" alt="Logo" />
      </div>
      <ul className="flex flex-col gap-10">
        {
          itemsNavigation.map( item => {
            const { id, icon } = item;
            return (
              <li key={ id } className="relative py-1 text-black-500 duration-300 cursor-pointer hover:text-pink group">
                <a href="#" className="flex items-center gap-3">
                  { icon }
                </a>
                <span className="absolute -translate-y-1/2 left-8 top-1/2 px-2 text-black-500 bg-white opacity-0 border rounded-lg shadow duration-300 group-hover:opacity-100">{item.name}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
