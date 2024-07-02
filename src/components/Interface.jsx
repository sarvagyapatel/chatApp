// import React from 'react'
import Chats from './Chats/Chats'
import Conv from './Conv/Conv'

function Interface() {
  return (
    <div className="flex flex-row w-full h-full border-8 border-white ">
        <div className="w-5/12">
          <Chats />
        </div>
        <div className="w-full">
          <Conv />
        </div>
      </div>
  )
}

export default Interface