import { useRef, useState } from 'react';
import { payrollsFilterOptions } from '../../data';
import { useClickOutside } from '../../hooks';
import { ArrowDownIcon } from '../../icons';
import { useTranslation } from 'react-i18next';

export const PaymentsDropdown = ({ setFilterSelected, filterSelected }) => {
  // Referencia al idioma seleccionado
  const [t] = useTranslation('global');
  
  // Referenciar el botón que controla el despliegue del modal
  const buttonRef = useRef();

  // Controlar el estado del modal
  const [ isOpened, setIsOpened ] = useState(false);
  
  // Abrir y cerrar el dropdown
  const handleButtonClick = () => {
    setIsOpened(!isOpened);
  };

  // Modificar el filtro y cerrar el modal al seleccionar una de las opciones
  const handleOptionClick = ({ target }) => {
    setFilterSelected(target.value);
    setIsOpened(false)
  }

  // Cerrar el dropdown al hacer click por fuera de buttonRef
  useClickOutside( buttonRef, () => setIsOpened(false) );
  
  return (
    <div className='relative'>
      <button ref={ buttonRef } type="button" className="w-60 py-0.5 px-3 flex justify-between items-center gap-5 text-sm font-medium text-black-500 border-2 border-black-300 rounded-md xl:w-52" onClick={ handleButtonClick }>{ t( `paymentsDropdown.${filterSelected}` ) }
        <ArrowDownIcon/>
      </button>
      <div className={`${isOpened ? 'max-h-40 py-2' : 'max-h-0'} absolute top-8 right-0 left-0 px-3 overflow-hidden bg-white rounded-lg shadow-lg z-10 transition-all ease-in-out duration-500`}>

        { // Iterar para crear las diferentes opciones de filtrado
          payrollsFilterOptions.map( ( option, index ) => (
            <button key={ index } className="w-full ml-2 py-1 text-left text-sm font-medium text-black-500" value={option} onClick={ handleOptionClick }>{ t( `paymentsDropdown.${option}` ) }</button>
          ))
        }
        
      </div>
    </div>
  )
}
