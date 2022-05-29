import UnfoldingMenu from './unfolding-menu.js';
import dataMenu      from '../utils/dataMenu.js';
import Header        from './Header.js';
import './Main.css'

function Main() {
  return (
    <div className="main">
      <Header/>
      <UnfoldingMenu menu={dataMenu}/>
    </div>
  );
}

export default Main;