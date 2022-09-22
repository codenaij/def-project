import App from 'next/app'
import 'focus-visible'
import '@/styles/tailwind.css'
import '../styles/style.scss'
import { useLayoutEffect } from 'react'
import axios from 'axios'
import { parseCookies, destroyCookie } from 'nookies'
import baseUrl from 'utils/baseUrl'
import { redirectUser } from 'utils/authUser'
import 'react-toastify/dist/ReactToastify.css'
import gsap from 'gsap'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { token } = parseCookies(ctx)
    // const tl = gsap.timeline();
    let pageProps = {}

    // useLayoutEffect(() => {
    //   tl.to('.main-title', {
    //     'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    //     y: 0,
    //     opacity: 1,
    //     duration: 1.5,
    //     ease: 'Power4.easeIn'
    //   })
    //   tl.to('.sub-title', {
    //     'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    //     y: 0,
    //     opacity: 1,
    //     duration: 1.5,
    //     ease: 'Power4.easeIn'
    //   }, "-=1.2")
    //   tl.to('.hero-image', {
    //     x: 0,
    //     opacity: 1,
    //     duration: 1.3,
    //   },)
    // }, [])

    const protectedRoutes = ctx.pathname === '/dashboard'
    if (!token) {
      destroyCookie(ctx, 'token')
      protectedRoutes && redirectUser(ctx, '/login')
    } else {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }

      try {
        const res = await axios.get(`${baseUrl}/api/auth`, {
          headers: { Authorization: token },
        })

        const { user } = res.data

        if (user) !protectedRoutes && redirectUser(ctx, '/')

        pageProps.user = user
      } catch (error) {
        destroyCookie(ctx, 'token')
        redirectUser(ctx, '/login')
      }
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default MyApp

// const tl = gsap.timeline();

// useLayoutEffect(() => {
//   tl.to('.main-title', {
//     'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
//     y: 0,
//     opacity: 1,
//     duration: 1.5,
//     ease: 'Power4.easeIn'
//   })
//   tl.to('.sub-title', {
//     'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
//     y: 0,
//     opacity: 1,
//     duration: 1.5,
//     ease: 'Power4.easeIn'
//   }, "-=1.2")
//   tl.to('.hero-image', {
//     x: 0,
//     opacity: 1,
//     duration: 1.3,
//   },)
// }, [])
