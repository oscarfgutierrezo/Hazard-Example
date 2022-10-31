import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';
import { CloseIcon, DollarIcon } from '../../icons';
import { useTranslation } from 'react-i18next';

export const PaymentsModalCreditLine = ({ isOpened, setIsOpened, creditLine, setCreditLine }) => {
  // Control sobre el idioma seleccionado
  const [t] = useTranslation('global');
  
  const modalRef = useRef();

  // Controlar el valor del input
  const [newCreditLine, setNewCreditLine] = useState(creditLine);
  const handleChange = ({ target }) => {
    setNewCreditLine(target.value);
  };

  // Modificar la línea de crédito y cerrar el modal al hacer submit al formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setCreditLine(newCreditLine);
    setIsOpened(false);
  };
  
  // Reset al valor del input y cerrar el modal al hacer click en el botón cerrar
  const handleClick = () => {
    setIsOpened(false);
    setNewCreditLine(creditLine);
  }

  // Ejecutar función handleClick al hacer click por fuera de modalRef
  useClickOutside( modalRef, () => handleClick() );

  return (
    <div className={`${ isOpened ? 'flex' : 'hidden' } fixed top-0 left-0 w-screen h-screen px-5 justify-center items-center bg-black-900/50 z-10`}>
      <div ref={ modalRef } className="animate relative w-full max-w-xs p-5 pt-10 bg-white rounded-lg" >
        <button type="button" className="absolute top-3 right-3 text-black-700" onClick={ handleClick } >
          <CloseIcon/>
        </button>
        <form className="flex flex-col items-center gap-3" onSubmit={ handleSubmit }>
          <label htmlFor="new-credit-line" className="mb-5 text-xl font-medium text-black-700">{ t("paymentsModalCredit.newLine") }</label>
          <div className="relative w-full">
            <input type="number" id="new-credit-line" value={newCreditLine} onChange={ handleChange } className="w-full py-1 px-9 text-center text-black-700 border rounded-md focus:border-purple focus:outline-0 peer"/>
            <div className="absolute translate-y-1/2 bottom-1/2 left-3 font-bold text-black-300 peer-focus:text-purple">
              <DollarIcon/>
            </div>
          </div>
          {
            (newCreditLine < creditLine) && 
            <p className='text-center text-sm text-red-500'>{ t("paymentsModalCredit.alert") }</p>
          }
          <button type="submit" className="w-full py-1 px-5 text-white bg-purple/80 rounded-md duration-300 hover:bg-purple">{ t("paymentsModalCredit.save") }</button>
        </form>
      </div>
    </div>
  )
}
