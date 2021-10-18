import style from "./shorter.module.css"

function Shorter() {
  return (
    <div className={style.shorter}>
      <form className={style.group}>
        <input className={style.input} placeholder="Shorten a link here..."/>
        <button type="submit" className={style.submit}>Shorten It!</button>
      </form>
    </div>
  )
}

export default Shorter
