type Users = User[];
type User = {
  id: string;
  name: string;
  room: string;
};

const users: Users = [];

export const addUser = ({ id, name, room }: User) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.name === name && user.room === user.room
  );
  if (existingUser) {
    return { error: 'ユーザーが既に存在しています' };
  }

  const user = {
    id,
    name,
    room,
  };
  users.push(user);
  return {user};
};

export const removeUser = (id: string) => {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

export const getUser = (id: string) => {
  return users.find(user => user.id === id);
};

export const getUserInRoom = (room: string) => {
  return users.filter(user => user.room === room);
};
