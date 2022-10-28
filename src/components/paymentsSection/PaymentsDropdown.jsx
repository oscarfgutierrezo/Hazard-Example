export const PaymentsDropdown = ({ isOpened, setIsOpened, setFilterSelected }) => {
  const handleSelected = ({ target }) => {
    setFilterSelected(target.value);
    setIsOpened(false)
  }
  
  return (
    <div className={`${isOpened ? 'max-h-40' : 'max-h-0'} absolute top-8 left-0 right-0 px-3 py-1 bg-white rounded-lg shadow-lg z-10 transition-all duration-500 overflow-hidden ease-in-out`}>
      <button className="ml-2 py-1 text-sm font-medium text-black-500" value='Revisadas' onClick={ handleSelected }>Revisadas</button>
      <button className="ml-2 py-1 text-sm font-medium text-black-500" value='En proceso de revisión' onClick={ handleSelected }>En proceso de revisión</button>
      <button className="ml-2 py-1 text-sm font-medium text-black-500" value='Pendientes por revisar' onClick={ handleSelected }>Pendientes por revisar</button>
    </div>
  )
}
