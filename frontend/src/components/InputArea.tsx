import React, { VFC } from 'react';
import { Box, Input, Flex, Button } from '@chakra-ui/react';

type Props = {
  message: string;
  setMessage: (value: string) => void;
  sendMessage: (e: React.FormEvent) => void;
};
const InputArea: VFC<Props> = ({ message, setMessage, sendMessage }) => {
  return (
    <Box as="form" onSubmit={sendMessage} bgColor="gray.200" p={2}>
      <Flex>
        <Input
          bgColor="white"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target?.value)
          }
        />
        <Button type="submit" ml={2} colorScheme="teal">
          送信
        </Button>
      </Flex>
    </Box>
  );
};

export default InputArea;
