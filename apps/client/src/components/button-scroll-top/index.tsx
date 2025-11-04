import React from 'react'
import scrollTop from './scroll_top.svg'
import './style.css'

type Props = {
  className: string
}

export const ButtonScrollTop: React.FC<Props> = ({ className }) => {
  const [showButton, setShowButton] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const screenHeight = window.innerHeight

      if (scrolled > screenHeight) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {showButton && (
        <button type="button" className={className} onClick={scrollToTop}>
          <img src={scrollTop} alt="Scroll top" />
        </button>
      )}
    </>
  )
}
