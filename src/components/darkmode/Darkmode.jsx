import { ReactComponent as Sun } from "./Sun.svg"
import { ReactComponent as Moon } from './Moon.svg'
import "./Darkmode.css"

const Darkmode = () => {
  const setDarkmode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
    localStorage.setItem("selectedTheme", "dark")
  }

  const setLightmode = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
    localStorage.setItem("selectedTheme", "light")
  }

  const selectedTheme = localStorage.getItem("selectedTheme")
  if (selectedTheme === "dark") {
    setDarkmode()
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkmode()
    } else {
      setLightmode()
    }
  }

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        id="darkmode-toggle"
        type="checkbox"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />

      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  )
}

export default Darkmode
