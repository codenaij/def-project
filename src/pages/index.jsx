import Head from 'next/head'

import { Candidate } from '@/components/Candidate'
import { Footer } from '@/components/Footer'
import { Subscribe } from '@/components/Subscribe'
import { Hero } from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { Donate } from '@/components/Donate'
import { WhyDigitalSector } from '@/components/WhyDigitalSector'
import { WhoWeAre } from '@/components/WhoWeAre'
import { AboutUs } from '@/components/AboutUs'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Digital Economy Forum (DEF)</title>
        <meta
          name="description"
          content="
          A Digitized Economy that supports the development and growth of digital professions of the Nigerian economy, reduces wealth inequality, and hampers corrupt practices. "
        />
      </Head>
      <Hero />
      <NavBar />
      <AboutUs />
      <WhoWeAre />
      <WhyDigitalSector />
      <Subscribe />
      <Donate />
      <Candidate />
      <Footer />
    </>
  )
}
