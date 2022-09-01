import { FaGithub, FaGitlab, FaLinkedin, FaFreeCodeCamp } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
    let logo = 'johnglennlogo-black.png';
    return (
        <div className="header">
            <img src={`../../public/resources/logo/${logo}`} alt="logo-black" />
            <GiHamburgerMenu className='burger' />
            <div className='links-navigations'>
                <ul className="navigations">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <ul className="profile-links">
                    <li><FaGithub />Github</li>
                    <li><FaGitlab />Gitlab</li>
                    <li><FaLinkedin />LinkedIn</li>
                    <li><FaFreeCodeCamp />FreeCodeCamp</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
