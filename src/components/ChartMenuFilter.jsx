export const ChartMenuFilter = ({ isOpened }) => {
  return (
    <div className={`${isOpened ? 'max-h-40' : 'max-h-0'} absolute top-8 left-0 right-0 px-3 bg-white rounded-lg shadow-lg z-10 transition-all duration-500 overflow-hidden ease-in-out`}>
      <div className="py-1 flex items-center">
        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2"/>
        <label forHtml="default-checkbox" className="ml-2 text-sm font-medium text-black-500">Item 1</label>
      </div>
      <div className="py-1 flex items-center">
          <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2"/>
          <label forHtml="checked-checkbox" className="ml-2 text-sm font-medium text-black-500">Item 2</label>
      </div>
    </div>
  )
}
