import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import coverImage from '@/images/img.jpg'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'

export function Hero() {
  const tl = gsap.timeline()
  useLayoutEffect(() => {
    tl.to('.main-title', {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'Power4.easeIn',
    })
    tl.to(
      '.sub-title',
      {
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'Power4.easeIn',
      },
      '-=1.2'
    )
    tl.to('.hero-image', {
      x: 0,
      opacity: 1,
      duration: 1.3,
    })
  }, [])
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="hero-image relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Image src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-slate-100" />
          <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            <blockquote className="mt-2">
              <p className="font-display text-xl font-medium text-slate-900">
                A Digitized Economy that supports the development and growth of
                digital professions of the Nigerian economy, reduces wealth
                inequality, and hampers corrupt practices.
              </p>
            </blockquote>
          </figure>
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="main-title font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              The Digital Economy Forum (DEF)
            </h1>
            <p className="sub-title mt-4 text-3xl text-slate-600">
              Nigeria&apos;s digital transformation
            </p>
            <div className="mb-10 mt-8 flex space-x-4">
              <ButtonLink href="/register" color="blue">
                Register
              </ButtonLink>
              <ButtonLink href="/login" variant="outline" color="blue">
                Login
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
