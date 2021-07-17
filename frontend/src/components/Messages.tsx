import React from 'react'
import { Box } from '@chakra-ui/react';
import Message from './Message';


const Messages = () => {
  return (
    <div>
      <Message message="message" user="user" isMe={false} />
    </div>
  )
}

export default Messages
