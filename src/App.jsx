import { Navbar, Sidebar, ChartSection } from "./components";

export const App = () => {  
  return (
    <div className="p-5 sm:p-10 flex">
      <Sidebar/>
      <div className="w-full">
        <Navbar/>
        <div className="py-10 md:px-10">
          <ChartSection/>
        </div>
      </div>
    </div>
  )
}

