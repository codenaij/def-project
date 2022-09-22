import { Container } from '@/components/Container'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import DashboardNav from '@/components/DashboardNav'
import { DashboardContent } from '@/components/DasboardContent'
import avatarImage2 from '@/images/atiku.jpg'
import { parseCookies } from 'nookies'
import Head from 'next/head'

function Dashboard({ user }) {
  return (
    <>
      <Head>
        <title>Dashboard | The Digital Economy Forum (DEF)</title>
      </Head>
      <DashboardNav user={user} />
      <Container>
        <div className="shadow overflow-hidden rounded-lg bg-white">
          <div className="px-4 py-5 sm:px-6"></div>
          <div className="bg-gray-50 px-4 py-5 sm:p-6">
            <DashboardContent user={user}>
              <p>
                Click referral code to copy and share with friends. Receive
                bonuses when they register with your link DEF”
              </p>
            </DashboardContent>
          </div>
        </div>
      </Container>
    </>
  )
}

Dashboard.getInitialProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx)

    const res = await axios.get(`${baseUrl}/api/auth`, {
      headers: { Authorization: token },
    })

    return { user: res.data }
  } catch (error) {
    return { errorLoading: true }
  }
}

export default Dashboard
