export const ChartItemsList = ({ itemsChecked }) => {
  return (
    <div className="flex flex-wrap justify-center gap-y-2 gap-x-5">
      {
        itemsChecked.map( item => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-pink rounded-md" style={{ backgroundColor: `${item.color}` }}></div>
            <p className="text-sm text-black-500">Item {item.id}</p>
          </div>
        ))
      }
    </div>
  )
}
