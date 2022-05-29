import UnfoldingMenu from './Unfolding-menu.js';
import data          from '../utils/data';
import Header        from './Header.js';
import './Main.css'
import {useState}    from 'react';

function Main() {
  const [isUnfold, setIsUnfold] = useState([]);
  const [isSelect, setIsSelect] = useState('');

  function onClickList(item) {
    const name = isUnfold.find(i => i === item.name);
    if (name) {
      setIsUnfold(isUnfold.filter(i => i !== name));
    } else {
      setIsUnfold([...isUnfold, item.name]);
    }
  }

  function onClickItem(item) {
    setIsSelect(item.id);
  }

  return (
    <div className="main">
      <Header/>
      <UnfoldingMenu
        isUnfold={isUnfold}
        isSelect={isSelect}
        menu={data.menu}
        onClickList={onClickList}
        onClickItem={onClickItem}
      />
    </div>
  );
}

export default Main;