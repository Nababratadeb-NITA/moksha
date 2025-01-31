import { Fragment, Suspense, lazy, memo, startTransition, useCallback, useMemo, useState } from 'react'
import { Tab } from '@headlessui/react'
import { classNames } from '@arpansaha13/utils'
import { useAppContext } from '~/containers/DataProvider'
import Sheet from '~common/Sheet'

const ContestOverview = lazy(() => import('../ContestOverview'))
const RegisterPanel = lazy(() => import('./RegisterPanel'))
const RegistrationsPanel = lazy(() => import('./RegistrationsPanel'))

const panels = Object.freeze([
  {
    name: 'Overview',
    query: '',
    requiresAuth: false,
  },
  {
    name: 'Register',
    query: new URLSearchParams({ panel: 'register' }).toString(),
    requiresAuth: false,
  },
  {
    name: 'Registrations',
    query: new URLSearchParams({ panel: 'registrations' }).toString(),
    requiresAuth: true,
  },
])

const TeamContest = ({ contest }) => {
  const { appContext } = useAppContext()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const showPanel = useMemo(
    () => panels.map(panel => !panel.requiresAuth || appContext.authenticated),
    [appContext.authenticated]
  )
  const switchTab = useCallback(i => startTransition(() => setSelectedIndex(i)), [])

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={switchTab}>
      <Tab.List
        as={Sheet}
        className={classNames(
          'my-4 sm:my-6 grid bg-amber-900/30 text-gray-200 text-sm font-medium divide-x divide-amber-900/70 overflow-hidden',
          appContext.authenticated ? 'grid-cols-3' : 'grid-cols-2'
        )}
      >
        {panels.map((panel, i) =>
          showPanel[i] ? <TabPanelButton key={panel.name} name={panel.name} query={panel.query} /> : null
        )}
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel as={Fragment}>
          <Suspense fallback={null}>
            <ContestOverview contest={contest} />
          </Suspense>
        </Tab.Panel>

        <Tab.Panel as={Fragment}>
          <Suspense fallback={null}>
            <RegisterPanel contest={contest} />
          </Suspense>
        </Tab.Panel>

        {appContext.authenticated && (
          <Tab.Panel as={Fragment}>
            <Suspense fallback={null}>
              <RegistrationsPanel contest={contest} />
            </Suspense>
          </Tab.Panel>
        )}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default TeamContest

const TabPanelButton = memo(({ name }) => (
  <Tab as={Fragment}>
    {({ selected }) => (
      <button type='button' className='px-1 xs:px-4 py-3 w-full relative focus:outline-none'>
        {name}
        {selected && (
          <span className='absolute left-0 bottom-0 inline-block w-full h-1 bg-amber-800' aria-hidden='true' />
        )}
      </button>
    )}
  </Tab>
))
