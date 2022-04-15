import { faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIcons = () => {
  return (
    <>
      <div className='social-icons-container'>
        <a href='https://www.facebook.com/iamffz' target={'_blank'} className="icon-facebook" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href='https://www.instagram.com/iamffz' target={'_blank'} className="icon-instagram" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='https://github.com/iamffz' target={'_blank'} className="icon-github" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </>
  )
}

export default SocialIcons
