import { useState, useRef } from 'react';
import { billsFilters } from '../../data';
import { useClickOutside } from '../../hooks';
import { CloseIcon } from '../../icons';
import { useTranslation } from 'react-i18next';

export const BillsOrderModal = ({ isOpened, setIsOpened, filterSelected, setFilterSelected }) => {
  // Referencia al idioma seleccionado
  const [t] = useTranslation('global');
  
  // Referenciar el contenedor del modal
  const modalRef = useRef();
  
  // Control sobre los radio inputs
  const [radioSelected, setRadioSelected] = useState('folio-asc')
  const handleSelect = ({ target }) => {
    setRadioSelected(target.value);
  };

  // Cambiar el filtro y cerrar el modal cuando se hace submit al formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterSelected(radioSelected);
    setIsOpened(false);
  };

  // Reestablecer radioSelected y cerrar modal al hacer click en el botón cerrar (sin submit)
  const resetRadioSelected = () => {
    setRadioSelected(filterSelected);
    setIsOpened(false);
  }

  // Ejecutar la función resetRadioSelected al hacer click por fuera de modalRef
  useClickOutside( modalRef, () => resetRadioSelected() );

  return (
    <div className={`${ isOpened ? 'flex' : 'hidden' } fixed top-0 left-0 w-screen h-screen px-5 justify-center items-center bg-black-900/50 z-10`}>
      <div ref={modalRef} className="animate relative w-full max-w-xs p-5 pt-8 bg-white rounded-lg sm:px-7">
        <button type="button" className="absolute top-3 right-3 text-black-700" onClick={ resetRadioSelected }>
          <CloseIcon/>
        </button>
        <h3 className="pb-7 text-center text-xl font-medium text-black-700">{ t("billsSortModal.title") }</h3>
        <form className="text-sm text-black-700" onSubmit={ handleSubmit }>
          
          { // Iterar sobre las diferentes categorías para filtrar
            billsFilters.map( (filter, index) => (
              <div key={ index }>
                <p className="font-medium text-black-500">{filter.category}</p>
                <div className="pt-1 pb-4 grid grid-cols-2">
                  
                  { // Para cada categoría se crean las dos opciones de ordenamiento
                    filter.options.map( option => {
                      const { key, name } = option;
                      return (
                        <div key={ key }>
                          <input type="radio" name="filter-selected" value={ key } id={ key } checked={ radioSelected === key } onChange={ handleSelect }/>
                          <label className="pl-1" htmlFor={ key }>{ t(`billsSortModal.${name}`) }</label>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            ))
          }
          
          <button type="submit" className="mt-5 w-full max-w-xs py-1 px-5 text-white bg-purple/80 rounded-md duration-300 hover:bg-purple">{ t("billsSortModal.sort") }</button>
        </form>
      </div>
    </div>
  )
}
