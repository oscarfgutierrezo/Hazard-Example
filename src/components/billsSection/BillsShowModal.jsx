import { CloseIcon } from "../../icons"

export const BillsShowModal = ({ isOpened, setIsOpened, folios }) => {
  return (
    <div className={`${ isOpened ? 'flex' : 'hidden' } fixed top-0 left-0 px-5 w-screen h-screen justify-center items-center bg-black-900/50 z-10`}>
      <div className="animate relative w-full max-w-xs p-5 py-9 bg-white rounded-lg sm:px-7">
        <button type="button" className="absolute top-3 right-3 text-black-700" onClick={ () => setIsOpened(false) }>
          <CloseIcon/>
        </button>
        <div className="max-h-96 overflow-scroll">
          {
            (!folios.length)
            ?
            <p className="py-10 text-center text-xl font-medium text-black-500">Selecciona una o varias facturas para ver los detalles</p>
            :
            folios.map( folio => (
              <div key={folio.folio} className="py-5 text-black-300">
                <h3 className="pb-5 text-center text-2xl font-medium text-black-700">Factura N°{folio.folio}</h3>
                <p>Proveedor:</p>
                <p className="pb-2 font-medium text-black-500">{folio.proveedor}</p>
                <p>Monto:</p>
                <p className="pb-2 font-medium text-black-500">{folio.monto}</p >
                <p>Tipo:</p>
                <p className="pb-2 font-medium text-black-500">{folio.tipo}</p >
                <p>Fecha de pago:</p>
                <p className="pb-2 font-medium text-black-500">{folio.fecha}</p>
                <p>Detalles:</p>
                <p className="pb-2 font-medium text-black-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
