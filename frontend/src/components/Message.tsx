import React, { VFC } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

export type Message = {
  text: string;
  user: string;
  isMe?: boolean;
};

// メッセージ本文
const MessageBox: VFC<Omit<Message, 'user'>> = ({ text, isMe }) => {
  const color = isMe
    ? { bg: 'teal', text: 'white' }
    : { bg: 'gray.200', text: 'inherit' };

  return (
    <Box bgColor={color.bg} color={color.text} py={2} px={3} rounded="lg">
      <Text fontSize="14">{text}</Text>
    </Box>
  );
};

// ユーザー名
const UserName: VFC<Pick<Message, 'user'>> = ({ user }) => {
  return <Text fontSize="12">{user}</Text>;
};

// 相手メッセージ
const YourMessage: VFC<Omit<Message, 'isMe'>> = ({ text, user }) => (
  <Flex alignItems="center">
    <Box>
      <MessageBox text={text} isMe={false} />
    </Box>
    <Box px={2}>
      <UserName user={user} />
    </Box>
  </Flex>
);

// 自分メッセージ
const MyMessage: VFC<Omit<Message, 'isMe'>> = ({ text, user }) => (
  <Flex alignItems="center" justifyContent="flex-end">
    <Box px={2}>
      <UserName user={user} />
    </Box>
    <Box>
      <MessageBox text={text} isMe={true} />
    </Box>
  </Flex>
);

const MessageComp: VFC<Message> = ({ text, user, isMe }) => {
  return isMe ? (
    <MyMessage text={text} user={user} />
  ) : (
    <YourMessage text={text} user={user} />
  );
};

export default MessageComp;
