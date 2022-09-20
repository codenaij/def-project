import { useState } from 'react'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

export function AboutUs() {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      id="who-we-are"
      aria-labelledby="who-we-are-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="who-we-are-title">
          Who We Are
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Who is DEF and what do we stand for?
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          The Digital Economy Forum (DEF) is a forum of young Digital
          Professionals and Technopreneurs who believe in Collective Public
          Action, and seek a thriving Digital Economy for Nigeria.
        </p>
        <p className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900">
          Our Approach
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          DEF is the manifestation of a vibrant democratic and free-market
          society where association of individuals or organizations within an
          industry form a special interest group, on the basis of one or more
          shared concerns in an attempt to influence Public Policy.
        </p>
      </Container>
    </section>
  )
}
