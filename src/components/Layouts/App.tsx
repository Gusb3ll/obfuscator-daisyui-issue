import Navbar from "../Navbar"

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => { 
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
    </div>
  )
}

export default AppLayout