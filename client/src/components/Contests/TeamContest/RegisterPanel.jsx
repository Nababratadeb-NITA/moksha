import accountAlertIcon from '@iconify-icons/mdi/account-alert'
import { useAppContext } from '~/containers/DataProvider'
import Sheet from '~common/Sheet'
import EmptyState from '~common/EmptyState'
import TeamRegistration from './TeamRegistration'

export default function RegisterPanel({ contest }) {
  const { appContext } = useAppContext()

  return (
    <>
      <Sheet className='mb-6 p-4 sm:p-6 markdown'>
        <h2>How does it work?</h2>

        <p>Since this is a team contest, you need to register through a team. Now you may either:</p>
        <ul>
          <li>Create your own team, or</li>
          <li>
            Join a team through an <strong>invite</strong> from the respective team leader.
          </li>
        </ul>
        <p>
          You can create, and be the leader, of only <strong>one team</strong>. But you can join as many teams as you
          want.
        </p>
      </Sheet>

      {appContext.authenticated ? (
        <TeamRegistration contest={contest} />
      ) : (
        <div className='mt-6'>
          <EmptyState
            icon={accountAlertIcon}
            title='Interested in this contest?'
            description='Login to register in it...'
          />
        </div>
      )}
    </>
  )
}
