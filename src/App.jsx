import { Navbar, Sidebar, ChartSection } from "./components";
import { BillsSection } from "./components/BillsSection";

export const App = () => {  
  return (
    <div className="p-5 sm:p-10 flex">
      <Sidebar/>
      <div className="w-full">
        <Navbar/>
        <div className="grid grid-cols-5 gap-y-10 py-10 md:px-10">
          <ChartSection/>
          <BillsSection/>
        </div>
      </div>
    </div>
  )
}

