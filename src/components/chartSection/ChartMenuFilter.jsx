import { useRef, useState } from 'react';
import { useCheckedChart, useClickOutside } from '../../hooks';
import { ArrowDownIcon } from "../../icons";

export const ChartMenuFilter = ({ items, itemsChecked, setItemsChecked }) => {
  const [ isOpened, setIsOpened ] = useState(false);
  const ref = useRef();
  const { checkedState, handleOnChecked } = useCheckedChart(items);
  
  const handleToggleChartFilter = () => {
    setIsOpened(!isOpened);
  };

  const handleOnChange = ({ target }, position) => {
    handleOnChecked(position);
    if(target.checked) {
      setItemsChecked([...itemsChecked, ...items.filter(item => item.id === target.value )])
    } else {
      setItemsChecked(itemsChecked.filter( item => item.id !== target.value))
    }     
  };

  useClickOutside( ref, () => setIsOpened(false) );
  
  return (
    <div ref={ ref } className='relative'>
      <button type="button" className="w-full px-3 py-0.5 flex justify-between items-center text-sm font-medium text-black-500 border-2 border-black-300 rounded-md" onClick={ handleToggleChartFilter }>Filtrar por
        <ArrowDownIcon/>
      </button>
      <div className={`${isOpened ? 'max-h-40' : 'max-h-0'} absolute top-8 left-0 right-0 px-3 bg-white rounded-lg shadow-lg z-10 transition-all duration-500 overflow-hidden ease-in-out`}>
        {
          items.map( (item, index) => (
            <div key={item.id} className="py-1 flex items-center">
              <input type="checkbox" value={item.id} checked={checkedState[index]} onChange={(e) => handleOnChange(e, index)} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2"/>
              <label htmlFor={item.id} className="ml-2 text-sm font-medium text-black-500">Item {item.id}</label>
            </div>
          ))
        }
      </div>
    </div>
  )
}

