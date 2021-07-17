import React, { VFC } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

type TMessage = {
  message: string;
};
type TUser = {
  user: string;
};
type TIsMe = {
  isMe?: boolean;
};

// メッセージ本文
const MessageBox: VFC<TMessage & TIsMe> = ({ message, isMe }) => {
  const color = isMe
    ? { bg: 'teal', text: 'white' }
    : { bg: 'gray.200', text: 'inherit' };

  return (
    <Box bgColor={color.bg} color={color.text} py={2} px={3} rounded="lg">
      <Text fontSize="14">{message}</Text>
    </Box>
  );
};


type Props = Required<TMessage & TUser & TIsMe>;

const Message: VFC<Props> = ({ message, user, isMe }) => {
  return (
    <Flex alignItems="center">
      <MessageBox message={message} isMe={isMe} />
    </Flex>
  );
};

export default Message;
