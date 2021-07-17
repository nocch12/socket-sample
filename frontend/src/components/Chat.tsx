import React, { VFC, useState, useEffect } from 'react';
import queryString from 'querystring';
import Io, { Socket } from 'socket.io-client';
import { Container, Box, Divider, Input, Flex, Button } from '@chakra-ui/react';
import InfoBar from './InfoBar';
import InputArea from './InputArea';
import Messages from './Messages';

type Props = {
  location: {
    search: string;
  };
};

const ENDPOINT = 'localhost:3008';

type Message = {};

let socket: Socket;

const Chat: VFC<Props> = ({ location }) => {
  const [name, setName] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  // ルーム初期設定
  useEffect(() => {
    const { name, room } = queryString.parse(location.search.substring(1));

    setName(name as string);
    setRoom(room as string);

    // ソケット接続
    socket = Io(ENDPOINT, {
      withCredentials: true,
    });
    socket.emit('join', { name, room }, ({ error }: { error: string }) => {});

    // 接続解除
    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [location]);

  useEffect(() => {
    // メッセージが送られてきたら、messagesに格納
    socket.on('message', (message: Message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // メッセージ送信
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <Container height="100vh" py={4}>
      <Flex flexDirection="column" height="full">
        <InfoBar room={room} />

        <Box flexGrow={1} p={2}>
          <Messages />
        </Box>

        <Divider />
        <InputArea message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </Flex>
    </Container>
  );
};

export default Chat;
