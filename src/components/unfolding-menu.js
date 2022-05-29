import {useState} from 'react';
import './unfolding-menu.css'

function UnfoldingMenu({menu}) {
  const [isUnfold, setIsUnfold] = useState([]);
  const [isSelect, setIsSelect] = useState('');

  function handleClickList(item) {
    const name = isUnfold.find(i => i === item.name);
    if (name) {
      setIsUnfold(isUnfold.filter(i => i !== name));
    } else {
      setIsUnfold([...isUnfold, item.name]);
    }
  }

  function handleClickItem(item) {
    setIsSelect(item.id);
  }


  return (
    <nav>
      <ul className="menu__list">
        {menu.menu.map((menuItem) => {
          return (
            menuItem.submenu ?
              <li key={menuItem.id} className="menu__item menu__item_is_header">
                <div className={`menu__header-item-container menu__item_is_mouse-over`}
                     onClick={() => handleClickList(menuItem)}>
                  <div className={`header__arrow ${isUnfold.includes(menuItem.name) && 'header__arrow_is_down'}`}/>
                  <p className="menu__item-header-text">{menuItem.name}</p>
                </div>
                {isUnfold.includes(menuItem.name) &&
                <ul className="menu__list">
                  {menuItem.submenu.map((subMenuItem) =>
                    <li key={subMenuItem.id}
                        className={`menu__item menu__item_is_mouse-over ${isSelect === subMenuItem.id && 'menu__item_is_active'}`}
                        onClick={() => handleClickItem(subMenuItem)}>{subMenuItem.name}
                    </li>)}
                </ul>
                }
              </li>
              : <li key={menuItem.id}
                    className={`menu__item menu__item_is_header menu__item_is_mouse-over ${isSelect === menuItem.id && 'menu__item_is_active'}`}
                    onClick={() => handleClickItem(menuItem)}>{menuItem.name}
              </li>)
        })}
      </ul>
    </nav>
  )
}

export default UnfoldingMenu;
