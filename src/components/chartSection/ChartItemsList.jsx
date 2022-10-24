export const ChartItemsList = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 ">
      {
        items.map( item => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="h-1 w-8 border bg-pink rounded-md" style={{ backgroundColor: `${item.color}` }}></div>
            <p className="text-sm text-black-500">Item {item.id}</p>
          </div>
        ))
      }
    </div>
  )
}
