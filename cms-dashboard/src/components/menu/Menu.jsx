import { Link } from 'react-router-dom'
import './menu.scss'
import { menu } from '../../data.jsx'

const Menu = () => {
  return (
    <div className='menu'>
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((itemList) => (
            <Link to={itemList.url} className='listItem' key={itemList.id}>
              <img src={itemList.icon} alt="" />
              <span className="listItemTitle">{itemList.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu