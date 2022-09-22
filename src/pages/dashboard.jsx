import { Container } from '@/components/Container'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import DashboardNav from '@/components/DashboardNav'
import { DashboardContent } from '@/components/DasboardContent'
import avatarImage2 from '@/images/atiku.jpg'
import Head from 'next/head'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | The Digital Economy Forum (DEF)</title>
      </Head>
      <DashboardNav />
      <Container>
        <div className="shadow overflow-hidden rounded-lg bg-white">
          <div className="px-4 py-5 sm:px-6"></div>
          <div className="bg-gray-50 px-4 py-5 sm:p-6">
            <DashboardContent>
              <p>“Send referral code to receive bonuses from DEF”</p>
            </DashboardContent>
          </div>
        </div>
      </Container>
    </>
  )
}
