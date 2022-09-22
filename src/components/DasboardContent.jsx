import Image from 'next/image'

import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import gift from '@/images/giftbox.png'

export function DashboardContent({ id, author, children }) {
  return (
    <aside
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative bg-slate-100 py-16 sm:py-32"
    >
      <div className="text-slate-900/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
      <Container size="xs" className="relative">
        <figure>
          <div className="flex text-slate-900 sm:justify-center">
            <Image src={gift} alt="giftbox" width={150} height={150} />
          </div>
          <blockquote className="mt-10 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center">
            {children}
          </blockquote>
          <figcaption className="mt-10 flex items-center sm:justify-center">
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                https://www.def.com/myusername
              </div>
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  )
}
