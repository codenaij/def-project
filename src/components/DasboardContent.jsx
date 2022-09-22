import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import gift from '@/images/giftbox.png'

export function DashboardContent({ id, user, children }) {
  const [copied, setCopied] = useState(false)
  const [userId, setUserId] = useState('')
  const [referralLink, setReferralLink] = useState('')
  const [showCopied, setShowCopied] = useState(false)

  useEffect(() => {
    setUserId(user.userId)
    setReferralLink(`https://www.def.com/register?ref=${userId}`)
  }, [user, userId])

  useEffect(() => {
    if (copied) {
      setShowCopied(true)
    }
    setTimeout(() => {
      setShowCopied(false)
      setCopied(false)
    }, 2000)
  }, [copied])

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
              <CopyToClipboard
                text={referralLink}
                onCopy={() => setCopied(true)}
              >
                <div className="cursor-pointer text-base font-medium leading-6 tracking-tight text-slate-900">
                  {referralLink}
                </div>
              </CopyToClipboard>
              {showCopied && (
                <p className="my-1 rounded bg-blue-100 py-1 text-center font-medium text-blue-800">
                  copied
                </p>
              )}
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  )
}
