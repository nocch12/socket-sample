import React, { VFC } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { AtSignIcon, CloseIcon } from '@chakra-ui/icons';

type Props = {
  room: string;
};

const InfoBar: VFC<Props> = ({ room }) => {
  return (
    <Flex bgColor="teal" color="white" p={2} alignItems="center">
      <AtSignIcon />
      <Heading size="sm" ml={2}>
        {room}
      </Heading>
      <Box as="a" href="/" ml="auto">
        <CloseIcon variant="ghost" />
      </Box>
    </Flex>
  );
};

export default InfoBar;
