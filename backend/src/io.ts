import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
import { Server } from 'http';
import { Server as IO } from 'socket.io';
import corsConf from '../config/cors';
import { addUser, removeUser, getUser, getUserInRoom } from './users';

export default (server: Server) => {
  // socketサーバーを起動する
  const io = new IO(server, {
    cors: corsConf,
  });

  io.on('connection', (socket) => {
    // joinイベントを監視
    socket.on(
      'join',
      ({ name, room }: { [key in string]: string }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        
        if (user === undefined) return callback(error);

        // messageイベントを送信
        socket.emit('message', {
          user: 'admin',
          text: `${user.name}さん、${user.room}へようこそ`,
        });

        // 部屋全体にメッセージを配信する
        socket.broadcast
          .to(user.room)
          .emit('message', {
            user: 'admin',
            text: `${user.name}さんが参加しました`,
          });

        socket.join(user.room);

        console.log('ユーザーが参加しました');
      }
    );

    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);

      if (user === undefined) return;

      io.to(user.room).emit('message', {user: user.name, text: message});

      console.log('メッセージが送信されました');
      
      callback();
    });

    socket.on('disconnect', (reason) => {
      console.log('ユーザーの接続が切れました');
    });
  });
};
