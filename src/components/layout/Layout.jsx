import Footer from './Footer'
import Header from './Header'

export default function Layout ({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>

      <footer> <Footer /></footer>
    </>
  )
}
