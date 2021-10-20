import axios from "axios"
import Result from "components/result"
import { useEffect, useState } from "react"
import style from "./shorter.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Shorter() {
  const [link, setLink] = useState(null)
  const [value, setValue] = useState(null)
  const [error, setError] = useState({ api: false, empty: false })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const {link : {value : linkValue} = {}} = e.target
    if (!linkValue) {
      setError({ empty: true })
      return;
    }
    setLink(linkValue)
  }

  const handleKeyUp = (e) => {
    const { value : {length} = 0 } = e.target
    setError({ empty: length < 1 })
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!link) return
      setLoading(true)
      try{
        const {data} = await axios.post('https://home.s.id/api/public/link/shorten', { url: link }, {
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With' : 'XMLHttpRequest'
          }
        })
        if (!data.short) {
          throw new Error("Error invalid url format")
        }
        setValue(`https://s.id/${data.short}`);
      }catch(e){
        setError({ api: true })
        toast.error(e.message, {
          theme: 'colored'
        });
      }
      setLoading(false)
    }

    fetchData()
    return () => {
      setValue(null)
      setError({ api: false, empty: false })
    }
  }, [link])

  return (
    <>
    <div className={style.shorter}>
      <form className={style.group} onSubmit={handleSubmit}>
        <input onKeyUp={handleKeyUp} name="link" className={`${style.input} ${error.empty ? style.invalid : null}`} placeholder="Shorten a link here..."/>
        <button type="submit" className={style.submit}>{loading ? 'Loading...' : 'Shorten It!'}</button>
      </form>
      {error.empty && <span className={style.error_invalid}>Please add a link</span>}
    </div>
    {error.api ? <ToastContainer/> : null}
    {!error.api && value ? <Result link={link} value={value}/> : null}
    </>
  )
}

export default Shorter
