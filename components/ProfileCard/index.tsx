import { Divider } from 'antd'
import SocialIcons from 'components/SocialIcons'

const ProfileCard = () => {
  const showAge = () => {
    const yearBirth = 1991
    const yearNow = new Date().getFullYear()
    return yearNow - yearBirth
  }
  return (
    <>
      <div className="grid grid-rows-1 align-middle md:h-screen">
        <div className="bg-white m-4 shadow-md rounded-lg md:w-1/2 md:m-auto">
          <div className="card-header">
            <div className="bg-profile-image-1 bg-center bg-cover bg-no-repeat flex justify-center rounded-t-lg p-4">
              <div className="bg-profile-2 bg-cover bg-center bg-no-repeat w-52 h-52 shadow-image border-4 border-white -mb-28 mt-12 rounded-full md:rounded-none md:mt-14 dark:border-black" />
            </div>
            <div className="font-ubuntu text-center mt-32 mb-14">
              <div className="text-xl font-bold">Pichai Kosawanitchakit</div>
              <div className="text-xs leading-6 text-zinc-400">Full Stack Developer | {`${showAge()} Years Old`}</div>
              <div className="flex items-center justify-center text-xs">
                <span className="material-icons text-base">place</span> Bangkok, Thailand
              </div>
              <div className="flex justify-center">
                <Divider className="min-w-0 w-9/12" />
              </div>
              <div className="social-contact">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
