// React Hooks Tutorial - 16 - useContext Hook Part 2
// React Hooks Tutorial - 17 - useContext Hook Part 3
// number 2 = type of prop pass
import React from 'react'
import ComponentFileF from './ComponentFileF';
import { useContext } from 'react';
import { ChannelContext, UserContext } from '../../App';

const ComponentFileE = () => {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  
  return (
    <div>
      {user} - {channel}
      {/* <ComponentFileF /> */}
    </div>
  )
}

export default ComponentFileE