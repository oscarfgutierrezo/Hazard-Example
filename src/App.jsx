import { Navbar, Sidebar } from "./components"

export const App = () => {
  return (
    <div className="p-5 sm:p-10 flex">
      <Sidebar/>
      <Navbar/>
    </div>
  )
}

