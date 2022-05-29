import './Header.css'
import bell from '../images/bell-icon.svg'

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">RPDU1</h1>
      <div className="header__container">
        <h2 className="header__subtitle">master</h2>
        <img className="header__image" src={bell}/>
      </div>
    </div>
  );
}

export default Header;
