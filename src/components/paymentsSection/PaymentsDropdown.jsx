import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks";
import { ArrowDownIcon } from '../../icons';

export const PaymentsDropdown = ({ setFilterSelected, filterSelected }) => {
  const [ isOpened, setIsOpened ] = useState(false);
  const ref = useRef();

  const handleSelected = ({ target }) => {
    setFilterSelected(target.value);
    setIsOpened(false)
  }

  const handleToggleDropdown = () => {
    setIsOpened(!isOpened);
  };

  useClickOutside( ref, () => setIsOpened(false) );
  
  return (
    <div className='relative'>
      <button ref={ ref } type="button" className="w-60 px-3 py-0.5 flex justify-between items-center gap-5 text-sm font-medium text-black-500 border-2 border-black-300 rounded-md xl:w-52" onClick={ handleToggleDropdown }>{filterSelected}
        <ArrowDownIcon/>
      </button>
      <div className={`${isOpened ? 'max-h-40 py-2' : 'max-h-0'} absolute top-8 left-0 right-0 px-3 bg-white rounded-lg shadow-lg z-10 transition-all duration-500 overflow-hidden ease-in-out`}>
        <button className="ml-2 py-1 text-sm font-medium text-black-500" value='Revisadas' onClick={ handleSelected }>Revisadas</button>
        <button className="ml-2 py-1 text-sm font-medium text-black-500" value='En proceso de revisión' onClick={ handleSelected }>En proceso de revisión</button>
        <button className="ml-2 py-1 text-sm font-medium text-black-500" value='Pendientes por revisar' onClick={ handleSelected }>Pendientes por revisar</button>
      </div>
    </div>
  )
}
