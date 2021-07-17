import React, { VFC } from 'react';
import { VStack } from '@chakra-ui/react';
import MessageItem, { Message } from './Message';

type Props = {
  messages: Message[];
};

const Messages: VFC<Props> = ({ messages }) => {
  return (
    <VStack spacing={2} align="stretch">
      {messages.map((m, index) => (
        <MessageItem key={index} text={m.text} user={m.user} isMe={m.isMe} />
      ))}
    </VStack>
  );
};

export default Messages;
