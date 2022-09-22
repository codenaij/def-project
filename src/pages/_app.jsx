import 'focus-visible'
import '@/styles/tailwind.css'
import '../styles/style.scss'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'

export default function App({ Component, pageProps }) {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.to('.main-title', {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'Power4.easeIn'
    })
    tl.to('.sub-title', {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'Power4.easeIn'
    }, "-=1.2")
    tl.to('.hero-image', {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },)
  }, [])
  

  return <Component {...pageProps} />
}
