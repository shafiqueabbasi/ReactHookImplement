// React Hooks Tutorial - 16 - useContext Hook Part 2
// number 1 = type of prop pass
import React from 'react'
import { UserContext, ChannelContext } from '../../App';

const ComponentFileF = () => {
  console.log("hello")
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return(
              <ChannelContext.Consumer>
                {
                  channel => {
                    return (
                      <div>
                        User Context value {user}, Channel Context value {channel}
                      </div>
                    )
                  }
                }
              </ChannelContext.Consumer>
            ) 
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentFileF