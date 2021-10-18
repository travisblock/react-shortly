import { useEffect, useState } from "react";
import Menu from "./menu";
import style from "./navbar.module.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleClose = () => setIsOpen(false);
    window.addEventListener('click', handleClose);
    return () => window.removeEventListener('click', handleClose);
  }, [isOpen]);

  return (
    <nav className={style.navbar}>
      <a href="/" className={style.brand}>
        <img src="/images/logo.svg" alt="Logo" />
      </a>
      {/* if isOpen */}
      {isOpen && (
        <div className={style.mobile}>
          <div className={style.container}>
            <Menu style={style} />
          </div>
        </div>
      )}

      <Menu style={style} />
      <div onClick={() => setIsOpen(!isOpen)} className={style.burger}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
    </nav>
  )
}

export default Navbar;
