import type { NextPage } from 'next'
import ProfileCard from 'components/ProfileCard'
import PageLayout from 'components/Layouts'

const HomePage: NextPage = () => {
  return (
    <>
      <PageLayout hideHeader={true}>
        <div className="h-screen grid items-center">
          <ProfileCard />
        </div>
      </PageLayout>
    </>
  )
}

export default HomePage
