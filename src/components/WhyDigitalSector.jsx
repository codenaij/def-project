import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import gdp from '@/images/gdp.png'
import graph from '@/images/graph.png'
import dollar from '@/images/def.jpeg'
import videoPlayerImage from '@/images/resources/video-player.svg'

const resources = [
  {
    title: 'GDP Growth',
    description:
      'In 2016, the global digital economy was worth about USD 11.5 trillion, equivalent to 15.5% of the world’s overall GDP and growing. For a country like Nigeria, the Digital Economy offers major opportunities, but also poses a huge risk of being left behind.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={gdp} height="180" width="180" alt="" />
        </div>
      )
    },
  },
  {
    title: 'Economic Diversification',
    description:
      'With the ever urgent need to diversify the Nigerian Economy and plan for a future with energy transition, supporting the growth of a Digital Economy is the most sensible thing to do.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={dollar} height="140" width="140" alt="" />
        </div>
      )
    },
  },
  {
    title: 'Jobs',
    description:
      'Even with an economy in decline, Nigeria has been able to produce African’s first unicorn - tech start-up with an investment of over one billion dollars. Flutterwave, OPay and Andela, all unicorns are a testament to the economic opportunity within a Nigerian digital economy.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={graph} height="140" width="140" alt="" />
        </div>
      )
    },
  },
]

export function WhyDigitalSector() {
  return (
    <section
      id="why-digital-sector"
      aria-labelledby="why-digital-sector-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="why-digital-sector-title">
          Why the Digital Sector
        </SectionHeading>
      </Container>
      <Container size="lg" className="mt-16">
        <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          THE POTENTIAL FOR NIGERIA
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          As the largest economy in Africa with one of the largest youth
          populations in the world, the African Union’s Digital Economy
          Initiative for Africa (DE4A), an initiative supported by the World
          Bank believes “Nigeria is well-positioned to develop a strong digital
          economy”, one that would have a transformational impact on the
          country.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          In order to reap the benefits of a digital economy for diversified and
          sustained growth, the DE4A believes Nigeria needs to focus on
          accelerating improvements in five fundamental pillars of a digital
          economy which include: digital infrastructure, digital platforms,
          digital financial services, digital entrepreneurship and digital
          skills.
        </p>
      </Container>
    </section>
  )
}
