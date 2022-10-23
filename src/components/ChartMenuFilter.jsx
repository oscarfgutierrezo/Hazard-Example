export const ChartMenuFilter = ({ isOpened, items }) => {
  
  
  return (
    <div className={`${isOpened ? 'max-h-40' : 'max-h-0'} absolute top-8 left-0 right-0 px-3 bg-white rounded-lg shadow-lg z-10 transition-all duration-500 overflow-hidden ease-in-out`}>
      {
        items.map( item => (
          <div className="py-1 flex items-center">
            <input type="checkbox" id={item.id} value={item.id} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2"/>
            <label htmlFor={item.id} className="ml-2 text-sm font-medium text-black-500">Item {item.id}</label>
          </div>
        ))
      }
    </div>
  )
}
