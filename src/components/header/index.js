import Navbar from "components/navbar"
import style from "./header.module.css"

function Header() {
  return (
    <header className={style.header}>
      <Navbar />
    </header>
  )
}


export default Header
