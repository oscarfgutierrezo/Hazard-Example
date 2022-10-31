import { useRef, useState } from 'react';
import { useCheckedChart, useClickOutside } from '../../hooks';
import { ArrowDownIcon } from "../../icons";
import { useTranslation } from 'react-i18next';

export const ChartDropdown = ({ items, itemsChecked, onItemsChecked }) => {
  // Control sobre el idioma seleccionado
  const [t] = useTranslation('global');
  
  const [ isOpened, setIsOpened ] = useState(false);

  const containerRef = useRef();

  // Abrir y cerrar el dropdown
  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  // Custom hook para controlar los checkbox
  const { checkedState, handleChecked } = useCheckedChart(items);
  
  const handleChange = ({ target }, position) => {
    // Modificar el estado que controla los checkbox
    handleChecked(position);

    //Filtrar el array de items seleccionados (itemsChecked) en función del estado del checkbox
    if(target.checked) {
      onItemsChecked([...itemsChecked, ...items.filter(item => item.id === target.value )])
    } else {
      onItemsChecked(itemsChecked.filter( item => item.id !== target.value))
    }     
  };

  // Cerrar el menú al hacer click por fuera de containerRef
  useClickOutside( containerRef, () => setIsOpened(false) );
  
  return (
    <div ref={ containerRef } className='relative'>
      <button type="button" className="w-full py-0.5 px-3 flex justify-between items-center text-sm font-medium text-black-500 border-2 border-black-300 rounded-md" onClick={ handleClick }>{t("chartDropdown.filter")}
        <ArrowDownIcon/>
      </button>
      <div className={`${isOpened ? 'max-h-40' : 'max-h-0'} absolute top-8 right-0 left-0 px-3 overflow-hidden bg-white rounded-lg shadow-lg z-10 transition-all ease-in-out duration-500`}>
        {
          items.map( (item, index) => (
            <div key={item.id} className="py-1 flex items-center">
              <input type="checkbox" id={item.id} value={item.id} checked={checkedState[index]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" onChange={(e) => handleChange(e, index)}/>
              <label htmlFor={item.id} className="w-full ml-2 text-sm font-medium text-black-500">Item {item.id}</label>
            </div>
          ))
        }
      </div>
    </div>
  )
}

