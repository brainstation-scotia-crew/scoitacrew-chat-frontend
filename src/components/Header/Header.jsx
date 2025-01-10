import './Header.scss';
import scotiaLogo from "../../assets/images/scotiabank.svg"

function Header () {
    return (
        <>
        <div className="header">
            <img src={scotiaLogo} alt='Scotiabank Logo' className='header__logo'/>
            <p className="header__te">Connect with an advisor</p>
        </div>
        </>
    )
}

export default Header;