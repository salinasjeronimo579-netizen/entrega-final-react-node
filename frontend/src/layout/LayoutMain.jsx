import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

export function LayoutMain({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="animate-fade-in flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutMain
