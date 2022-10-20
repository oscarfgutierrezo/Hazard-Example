import { itemsNavigation } from "./itemsNavigation";

export const Sidebar = () => {
  return (
    <div className="hidden h-full py-3 pr-5 border-r md:flex md:flex-col md:items-center md:gap-10">
      <div className="w-10">
        <img src="./src/assets/logo.png" alt="Logo" />
      </div>
      <ul className="flex flex-col gap-10">
        {
          itemsNavigation.map( item => (
            <li key={item.id} className="relative py-1 text-black-500 duration-300 cursor-pointer hover:text-pink group">
              <button className="flex items-center gap-3">
                {item.icon}
              </button>
              <span className="absolute -translate-y-1/2 left-9 top-1/2 px-2 text-black-500 bg-white border rounded-lg shadow opacity-0 duration-300 group-hover:opacity-100">{item.name}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
