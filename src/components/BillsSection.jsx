export const BillsSection = () => {
  return (
    <div className="col-span-5 grid grid-cols-3 gap-4">
      <div className="col-span-5">
        <h2 className="text-center text-xl font-bold text-black-900 sm:text-left">Facturas por pagar</h2>
      </div>
      <div className="col-span-5 justify-self-end">
        <button className="text-sm font-bold text-pink uppercase">Ver Todo</button>
      </div>
      <div className="col-span-5 overflow-x-auto">
        <table className="w-full py-3 text-sm text-black-500">
          <thead className="text-black-700">
            <tr>
              <th></th>
              <th>N° Folio</th>
              <th>Proveedor</th>
              <th>Tipo</th>
              <th>Monto</th>
              <th>Fecha de pago</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="radio" name="" id="" /></td>
              <td>6574743</td>
              <td>Soc.Import.Y Export.Bash.Ltda</td>
              <td>Cedida</td>
              <td>$100.448.159</td>
              <td>Fecha de pago</td>
            </tr>
            <tr>
              <td><input type="radio" name="" id="" /></td>
              <td>6574743</td>
              <td>Soc.Import.Y Export.Bash.Ltda</td>
              <td>Cedida</td>
              <td>$100.448.159</td>
              <td>Fecha de pago</td>
            </tr>
            <tr>
              <td><input type="radio" name="" id="" /></td>
              <td>6574743</td>
              <td>Soc.Import.Y Export.Bash.Ltda</td>
              <td>Cedida</td>
              <td>$100.448.159</td>
              <td>Fecha de pago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}