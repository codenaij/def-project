import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import duotoneImage from '@/images/screencasts/duotone.svg'
import gridsImage from '@/images/screencasts/grids.svg'
import setupImage from '@/images/screencasts/setup.svg'
import strokesImage from '@/images/screencasts/strokes.svg'

const videos = [
  {
    title: 'Getting started with Figma',
    description:
      'Get familiar with the Figma UI, the different tools it offers, and the most important features.',
    image: setupImage,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Setting up your artboard',
    description:
      'Learn how to create a new artboard and configure your grid and rulers for designing icons.',
    image: gridsImage,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Designing your first icon',
    description:
      'Using basic shapes and boolean operations, learn how to design your own notification icon from scratch.',
    image: strokesImage,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Advanced design techniques',
    description:
      'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image: duotoneImage,
    runtime: { minutes: 28, seconds: 44 },
  },
]

export function WhoWeAre() {
  return (
    <section
      id="def-vision"
      aria-labelledby="def-vision-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="def-vision-title">
          Our Vision
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Our Vision is simple... “A Digital Nigeria”
        </p>

        <p className="mt-4 text-lg tracking-tight text-slate-700">
          A Digitized Economy that supports the development and growth of
          digital professions of the Nigerian economy, reduces wealth
          inequality, and hampers corrupt practices.
        </p>
        <ul className="mt-8 space-y-3 text-lg tracking-tight text-slate-700">
          {[
            'Professionalism of digital practices and jobs creation.',
            'Economic diversification and economic growth.',
            'A Nigerian economy for the digital era',
            'Closing the wealth gap by bridging the digital divide',
            'Improved ICT capacity development for students, and government workers.',
            'Policy Change and E-government contracts',
            'Adoption of e-government solutions that impede corrupt practices in government institutions.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <svg
                aria-hidden="true"
                className="h-8 w-8 flex-none fill-blue-500"
              >
                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
              </svg>
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <a
            href="#donate"
            className="text-base font-medium tracking-tight text-blue-600 hover:text-blue-800"
          >
            Donate to us &rarr;
          </a>
        </p>
      </Container>
    </section>
  )
}
