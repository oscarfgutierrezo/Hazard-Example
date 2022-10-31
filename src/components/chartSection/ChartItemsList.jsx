export const ChartItemsList = ({ itemsChecked }) => {
  return (
    <div className="flex flex-wrap justify-center gap-y-2 gap-x-5">
      
      { // Iterar sobre el array de items seleccionados para mostrar las convenciones de colores sobre la gráfica
        itemsChecked.map( item => {
          const { id, color } = item;
          return (
            <div key={ id } className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-pink rounded-md" style={{ backgroundColor: `${ color }` }}></div>
              <p className="text-sm text-black-500">Item { id }</p>
            </div>
          )
        })
      }
      
    </div>
  )
}
