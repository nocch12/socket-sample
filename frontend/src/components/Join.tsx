import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Input, Button, Box } from '@chakra-ui/react';

const Join = () => {
  const [name, setName] = useState<string>('');
  const [room, setRoom] = useState<string>('');

  const handleSignIn = (e: React.MouseEvent) => {
    if (!name || !room) return e.preventDefault();
  }

  return (
    <Container pt={4}>
        <Input
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          mt={2}
          placeholder="room name"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <Box mt={2}>
          <Link to={`/chat?room=${room}&name=${name}`} onClick={handleSignIn}>
            <Button>
              Sign In
            </Button>
          </Link>
        </Box>
    </Container>
  );
};

export default Join;
