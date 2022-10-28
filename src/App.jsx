import { Navbar, Sidebar, ChartSection, BillsSection, PaymentsSection } from './components';

export const App = () => {  
  return (
    <div className="p-5 sm:p-10 flex">
      <Sidebar/>
      <div className="w-full">
        <Navbar/>
        <div className="grid grid-cols-5 gap-y-12 md:px-10">
          <ChartSection/>
          <BillsSection/>
          <PaymentsSection/>
        </div>
      </div>
    </div>
  )
}

