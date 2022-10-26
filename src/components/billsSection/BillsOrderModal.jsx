import { useState } from "react";
import { CloseIcon } from "../../icons"

export const BillsOrderModal = ({ isOpened, setIsOpened, filterSelected, setFilterSelected }) => {
  
  const [radioSelected, setRadioSelected] = useState('folio-asc')

  const handleSelect = ({ target }) => {
    setRadioSelected(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterSelected(radioSelected)
    setIsOpened(false);
  }
  
  return (
    <div className={`${ isOpened ? 'flex' : 'hidden' } fixed top-0 left-0 px-5 w-screen h-screen justify-center items-center bg-black-900/50 z-10`}>
      <div className="animate relative w-full max-w-xs p-5 pt-8 bg-white rounded-lg sm:px-7" >
        <button type="button" className="absolute top-3 right-3 text-black-700" onClick={ () => setIsOpened(false) }>
          <CloseIcon/>
        </button>
        <h3 className="pb-7 text-center text-xl font-medium text-black-700">Ordenar Facturas por</h3>
        <form className="text-sm text-black-700" onSubmit={ handleSubmit }>
          <p className="font-medium text-black-500">N° Folio</p>
          <div className="pb-4 pt-1 grid grid-cols-2">
            <div>
              <input type="radio" name="filter-selected" value='folio-asc' id="folio-asc" checked={ radioSelected === 'folio-asc' } onChange={ handleSelect }/>
              <label className="pl-1" htmlFor="folio-asc">Ascendente</label>
            </div>
            <div>
              <input type="radio" name="filter-selected" value='folio-des' id="folio-des" checked={ radioSelected === 'folio-des' } onChange={ handleSelect } />
              <label className="pl-1" htmlFor="folio-des">Descendente</label>
            </div>
          </div>
          <p className="font-medium text-black-500">Proveedor</p>
          <div className="pb-4 pt-1 grid grid-cols-2">
            <div>
              <input type="radio" name="filter-selected" value="proveedor-asc" id="proveedor-asc" checked={ radioSelected === 'proveedor-asc' } onChange={ handleSelect } />
              <label className="pl-1" htmlFor="proveedor-asc">Ascendente</label>
            </div>
            <div>
              <input type="radio" name="filter-selected" value="proveedor-des" id="proveedor-des" checked={ radioSelected === 'proveedor-des' } onChange={ handleSelect } />
              <label className="pl-1" htmlFor="proveedor-des">Descendente</label>
            </div>
          </div>
          <p className="font-medium text-black-500">Tipo</p>
          <div className="pb-4 pt-1 grid grid-cols-2">
            <div>
              <input type="radio" name="filter-selected" value="tipo-ced" id="tipo-ced" checked={ radioSelected === 'tipo-ced' } onChange={ handleSelect } />
              <label className="pl-1" htmlFor="tipo-ced">Cedidas</label>
            </div>
            <div>
              <input type="radio" name="filter-selected" value="tipo-noced" id="tipo-noced" checked={ radioSelected === 'tipo-noced' } onChange={ handleSelect } />
              <label className="pl-1" htmlFor="tipo-noced">No Cedidas</label>
            </div>
          </div>
          <p className="font-medium text-black-500">Monto</p>
          <div className="pb-4 pt-1 grid grid-cols-2">
            <div>
              <input type="radio" name="filter-selected" value="monto-asc" id="monto-asc" checked={ radioSelected === 'monto-asc' } onChange={ handleSelect } />
              <label className="pl-1" htmlFor="monto-asc">Ascendente</label>
            </div>
            <div>
              <input type="radio" name="filter-selected" value="monto-des" id="monto-des" checked={ radioSelected === 'monto-des' } onChange={ handleSelect } />
              <label className="pl-1" htmlFor="monto-des">Descendente</label>
            </div>
          </div>
          <p className="font-medium text-black-500">Fecha</p>
          <div className="pb-4 pt-1 grid grid-cols-2">
            <div>
              <input type="radio" name="filter-selected" value="fecha-ant" id="fecha-ant" checked={ radioSelected === 'fecha-ant' } onChange={ handleSelect } />
              <label className="pl-1" htmlFor="fecha-ant">Más Antigua</label>
            </div>
            <div>
              <input type="radio" name="filter-selected" value="fecha-rec" id="fecha-rec" checked={ radioSelected === 'fecha-rec' } onChange={ handleSelect } />
              <label className="pl-1" htmlFor="fecha-rec">Más Reciente</label>
            </div>
          </div>
          <button type="submit" className="mt-5 w-full max-w-xs px-5 py-1 text-white bg-purple rounded-md">Ordenar</button>
        </form>
      </div>
    </div>
  )
}
