import {useState} from 'react';
import './Unfolding-menu.css'

function UnfoldingMenu({menu, isSelect, isUnfold, onClickItem, onClickList}) {

  return (
    <nav>
      <ul className="menu__list">
        {menu.map((menuItem) => {
          return (
            menuItem.submenu ?
              <li key={menuItem.id} className="menu__item menu__item_is_header">
                <div className={`menu__header-item-container menu__item_is_mouse-over`}
                     onClick={() => onClickList(menuItem)}>
                  <div className={`header__arrow ${isUnfold.includes(menuItem.name) && 'header__arrow_is_down'}`}/>
                  <p className="menu__item-header-text">{menuItem.name}</p>
                </div>
                {isUnfold.includes(menuItem.name) &&
                <UnfoldingMenu menu={menuItem.submenu}
                               isUnfold={isUnfold}
                               isSelect={isSelect}
                               onClickList={onClickList}
                               onClickItem={onClickItem}/>
                }
              </li>
              : <li key={menuItem.id}
                    className={`menu__item menu__item_is_mouse-over ${isSelect === menuItem.id && 'menu__item_is_active'}`}
                    onClick={() => onClickItem(menuItem)}>{menuItem.name}
              </li>)
        })}
      </ul>
    </nav>
  )
}

export default UnfoldingMenu;
