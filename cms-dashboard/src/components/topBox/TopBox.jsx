import './topBox.scss'
import { topDealUsers } from '../../data'
const TopBox = () => {
  return (
    <div className='topBox'>
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map(item => (
          <div className="listItem" key={item.id}>
            <div className="user">
              <img src={item.img} alt="" />
              <div className="userDetails">
                <div className="username">{item.username}</div>
                <div className="email">{item.email}</div>
              </div>
            </div>
            <div className="amount">${item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox