import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { logoutUser } from 'utils/authUser'
import { Button } from './Button'

const navigation = [{ name: 'LOGOUT', href: '#' }]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardNav({ user: { email } }) {
  return (
    <Disclosure as="nav" className="bg-blue-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
              <div className="inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <div className="flex flex-shrink-0 items-center">
                  <h6 className="font-display text-3xl font-extrabold tracking-wider text-white sm:text-4xl">
                    DEF
                  </h6>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex space-x-4">
                  <Button onClick={() => logoutUser(email)}>Logout</Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
