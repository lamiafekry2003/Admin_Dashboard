import React from 'react';
import {topDealUsers} from '../../data';
import "./TapBox.scss"
export const TopBox = () => {
  return (
    <div className='topbox'>
        <h1>Top Deals</h1>
        <div className="list">
            {topDealUsers.map(user=>(
                <div className="listItem" key={user.id}>
                    <div className="user">
                      <img src={user.img} alt="" />
                      <div className="userText">
                        <div className="userName">{user.username}</div>
                        <div className="email">{user.email}</div>
                      </div>
                    </div>
                    <span className="amount">${user.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}
