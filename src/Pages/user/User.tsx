import React, { useState } from 'react'
import"./user.scss";
import { Single } from '../../Component/Single/Single';
import { singleUser } from '../../data';

// fetch and send data to single component 
export const User = () => {
  return (
    <div>
       <Single {...singleUser}/>
    </div>
  )
}
