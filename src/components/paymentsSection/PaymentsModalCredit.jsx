import { useState } from "react";
import { CloseIcon, DollarIcon } from "../../icons"

export const PaymentsModalCreditLine = ({ isOpened, setIsOpened, creditLine, setCreditLine }) => {
  const [newCreditLine, setNewCreditLine] = useState(creditLine);
  const handleCredit = ({ target }) => {
    setNewCreditLine(target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setCreditLine(newCreditLine);
    setIsOpened(false);
  }
  return (
    <div className={`${ isOpened ? 'flex' : 'hidden' } fixed top-0 left-0 px-5 w-screen h-screen justify-center items-center bg-black-900/50 z-10`}>
      <div className="animate relative w-full max-w-xs p-5 pt-10 bg-white rounded-lg" >
        <button type="button" className="absolute top-3 right-3 text-black-700" onClick={ () => setIsOpened(false) } >
          <CloseIcon/>
        </button>
        <form className="flex flex-col items-center gap-3" onSubmit={ handleSubmit }>
          <label htmlFor="new-credit-line" className="mb-5 text-xl font-medium text-black-700">Nueva Línea de Crédito</label>
          <div className="relative w-full">
            <input type="text" id="new-credit-line" value={newCreditLine} onChange={ handleCredit } className="w-full px-9 py-1 text-center text-black-700 border rounded-md focus:outline-0 focus:border-purple peer"/>
            <div className="absolute translate-y-1/2 bottom-1/2 left-3 text-black-300 font-bold peer-focus:text-purple">
              <DollarIcon/>
            </div>
          </div>
          <button type="submit" className="w-full px-5 py-1 text-white bg-purple rounded-md">Guardar</button>
        </form>
      </div>
    </div>
  )
}
