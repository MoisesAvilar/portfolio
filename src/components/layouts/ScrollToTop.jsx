import { useEffect, useState } from "react"
import styles from "./ScrollToTop.module.css"

import { FaArrowUpLong } from "react-icons/fa6"

function Arrow() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div>
      {isVisible && (
        <button className={styles.arrow} onClick={scrollToTop} data-aos="fade-up">
          <FaArrowUpLong />
        </button>
      )}
    </div>
  )
}

export default Arrow
