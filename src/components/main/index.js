import Feature from "components/feature";
import Shorter from "components/shorter";
import style from "./main.module.css"

function Main() {
  return (
    <section className={style.main}>
      <Shorter/>
      <Feature/>
    </section>
  )
}

export default Main;
