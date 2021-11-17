import style from './style.module.css'

export default function About () {
  return (
    <div className={style.about}>
      <a href="https://github.com/ajid2/react-shortly" target="_blank" rel="noopener noreferrer">
        <img className={style.github} src="/github-logo-light.png" alt="React URL Shortening" title="ajid2/react-shortly" />
      </a>
    </div>
  )
}
